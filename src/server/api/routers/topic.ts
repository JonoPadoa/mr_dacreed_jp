import { createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";
import { z } from "zod";
import { Session } from "@clerk/nextjs/dist/types/server";
import { getSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const topicRouter = createTRPCRouter({
  
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      where: {
        userId: "user_2T2NwjCmVsicPtKFco0WQXUMT0e"
      },
    });
  }),

create: publicProcedure
.input(z.object({title: z.string()}))
.mutation(({ctx, input})=>{
    console.log(ctx.session) 
    return ctx.prisma.topic.create({
      data: {
            title: input.title,
            userId: "user_2T2NwjCmVsicPtKFco0WQXUMT0e"
        }
    })
})

});

