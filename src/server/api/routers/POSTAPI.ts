import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const PostapiRouter = createTRPCRouter({
  getAll: publicProcedure
  .query(({ ctx }) => {
    if (ctx.auth?.userId) {
      return ctx.prisma.topic.findMany({
        where: {
          userId: ctx.auth.userId,
        },
      });
    } else {
      console.log("User not authenticated. => ctx.auth.userId is null <=");
    }
  }),
  createTestString: protectedProcedure
  .input(z.object({ testInput: z.string() }))
  .mutation(({ ctx, input }) => {
    return ctx.prisma.testString.create({
      data: {
        testInput: input.testInput,
        userId: ctx.auth.userId,
      },
    });
  }),



   create: protectedProcedure  
       .input(z.object({ title: z.string() }))
       .mutation(({ ctx, input }) => {
         console.log(ctx.auth); 
         return ctx.prisma.topic.create({
           data: {
             title: input.title,
             userId: ctx.auth.userId,                       //  "clkswcf8j0000dg1km8pz49zq",
                 
           },
         });
       }),
  });
  

