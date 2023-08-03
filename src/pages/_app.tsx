import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "../styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  console.log(process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
