import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "./routers/example";
import { courseRouter } from "./routers/course";
import { courseQuestionRouter } from "./routers/courseQuestion";
import { newUserRouter } from "./routers/newUser";
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  course: courseRouter,
  courseQuestion: courseQuestionRouter,
  newUser: newUserRouter,
});

export type AppRouter = typeof appRouter;
