import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signOut: "/",
    signIn: "/",
  },
});

export const config = {
  matcher: ["/account/:path*"],
};