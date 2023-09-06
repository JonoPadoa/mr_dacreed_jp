import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const newUserRouter = createTRPCRouter({
  create: protectedProcedure.input(z.object({})).mutation(({ ctx }) => {
    console.log(ctx.auth.userId);
    return ctx.prisma.user.create({
      data: {
        id: ctx.auth.userId,
        name: ctx.auth.user?.firstName,
      },
    });
  }),
});
