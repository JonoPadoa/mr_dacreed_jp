import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// API END POINTS
export const courseRouter = createTRPCRouter({
  // GET ALL
  getAll: protectedProcedure.query(({ ctx }) => {
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
      console.log(`courseRouter.getByCourseId: courseId=${input.courseId}`);
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
      })
    )
    .mutation(({ ctx, input }) => {
      console.log(ctx.auth.userId);
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

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // how to connect to Prisma . findMany on example table
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
