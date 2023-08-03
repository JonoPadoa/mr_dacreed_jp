import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    if (ctx.auth?.userId) {
      console.log(`Tester - ${ctx.auth.userId}`)
      return ctx.prisma.topic.findMany({
        where: {
          userId: ctx.auth.userId,
          // 'user_2T2NwjCmVsicPtKFco0WQXUMT0e'
          
        },
      });
    } else {
      console.log("User not authenticated. => ctx.auth.userId is null <=");
    }
  }),
  create: protectedProcedure  
      .input(z.object({ title: z.string() }))
      .mutation(({ ctx, input }) => {
        console.log(ctx.auth); 
        return ctx.prisma.topic.create({
          data: {
            title: input.title,
            userId: ctx.auth.userId
            // 'user_2T2NwjCmVsicPtKFco0WQXUMT0e'
            // ctx.auth.userId,
            //"clkswcf8j0000dg1km8pz49zq"
                 
          },
        });
      }),
  });
  

// ================>  handle the case where ctx.auth.userId is null <================
// 1 return an empty array to indicate that no topics were found for the given user:
// return [];

// 2 throw an error to indicate that the user is not authenticated:
// throw new TRPCError({ code: "UNAUTHORIZED" });

// 3 return all topics, regardless of the user:
// return ctx.prisma.topic.findMany();