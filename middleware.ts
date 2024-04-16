import {withMiddlewareAuthRequired} from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
    matcher: ["/dash", "/settings", "/code", "/conversation"],
};



// import { authMiddleware } from "@clerk/nextjs";
//
// export default authMiddleware({
//     // Routes that can be accessed while signed out
//     publicRoutes: ['/','/api/webhook'],
//     // Routes that can always be accessed, and have
//     // no authentication information
//     ignoredRoutes: ['/sign-in','/sign-up'],
// });
//
//
// export const config = {
//     // Protects all routes, including api/trpc.
//     // See https://clerk.com/docs/references/nextjs/auth-middleware
//     // for more information about configuring your Middleware
//     matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
//
