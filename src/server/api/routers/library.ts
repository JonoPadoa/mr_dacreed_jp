// import { z } from "zod";
import {
  createTRPCRouter,
  // publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const libraryRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),



// Commented out the below to test deployment - check if it is needed.
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.library.findMany();
  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "This is the LIBRARY page from server/api/routers/library.ts";
  }),
});
