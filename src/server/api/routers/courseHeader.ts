import { z } from "zod";
import {
  createTRPCRouter,protectedProcedure, publicProcedure,
} from "~/server/api/trpc";

// API END POINTS

export const courseHeaderRouter = createTRPCRouter({
    // GET ALL 
    getAll: publicProcedure.query(({ ctx }) => {
        if (ctx.auth?.userId) {
            return ctx.prisma.courseHeader.findMany({
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
    getByCourseId: protectedProcedure
      .input(z.object({ courseId: z.string()}))
      .query(({ ctx, input }) => {
        console.log(`courseHeaderRouter.getByCourseId: courseId=${input.courseId}`);
        if (ctx.auth?.userId) {
            return ctx.prisma.courseHeader.findMany({
              where: {
                userId: ctx.auth.userId,
                courseId: input?.courseId,
              },
            });
          } else {
            console.log("User not authenticated. => ctx.auth.userId is null <=");
            return [];
          }
        }),

    // CREATE
    create: protectedProcedure  
      .input(z.object({ 
        title: z.string(), 
        subHeading: z.string(), 
        description: z.string(), 
        courseId: z.string() 
      }))
      .mutation(({ ctx, input }) => {
        // console.log(ctx.auth); 
        return ctx.prisma.courseHeader.create({
          data: {
            title: input.title,
            userId: ctx.auth.userId,
            subHeading: input.subHeading,
            description: input.description,
            courseId: input.courseId, //"clkswcf8j0000dg1km8pz49zq",                 
          },
        });
      })});
