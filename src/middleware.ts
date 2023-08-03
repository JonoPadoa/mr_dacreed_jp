
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({ publicRoutes: ['/', "/api/(.*)"],});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  // To prevent Clerk authentication from running at all
  // ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", '/library/el/elenasPage']
  // ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)"]
};




//   ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", "/api/auth/_log"]