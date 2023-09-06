import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// API END POINTS
// TODO: courseHeaderRouter is unused now.  Delete it.
export const courseHeaderRouter = createTRPCRouter({
  // GET ALL
  getAll: publicProcedure.query(({ ctx }) => {
    if (ctx.auth?.userId) {
      return ctx.prisma.course.findMany({
        where: {
          userId: ctx.auth.userId,
        },
      });
    } else {
      console.log("User not authenticated. => ctx.auth.userId is null <=");
      return [];
    }
  }),
  // GET by ID
  getCourseById: protectedProcedure
    .input(z.object({ courseId: z.string() }))
    .query(({ ctx, input }) => {
      console.log(
        `courseHeaderRouter.getByCourseId: courseId=${input.courseId}`
      );
      if (ctx.auth?.userId) {
        return ctx.prisma.course.findMany({
          where: {
            userId: ctx.auth.userId,
            id: input?.courseId,
          },
        });
      } else {
        console.log("User not authenticated. => ctx.auth.userId is null <=");
        return [];
      }
    }),
  // CREATE
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subHeading: z.string(),
        description: z.string(),
        courseId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      // console.log(ctx.auth);
      return ctx.prisma.course.create({
        data: {
          title: input.title,
          userId: ctx.auth.userId,
          subHeading: input.subHeading,
          description: input.description,
        },
      });
    }),
});
