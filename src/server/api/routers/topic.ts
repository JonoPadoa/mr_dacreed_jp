import { createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";
import { z } from "zod";
import { Session } from "@clerk/nextjs/dist/types/server";
// import { getSession } from "next-auth/react";

export const topicRouter = createTRPCRouter({
  
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      where: {
        userId: ctx.session?.user.id
      },
    });
  }),

create: protectedProcedure
.input(z.object({title: z.string()}))
.mutation(({ctx, input})=>{
 
    return ctx.prisma.topic.create({
      
        data: {
            title: input.title,
            userId: ctx.session?.user.id
        }
    })
})

});
