"use client";

import { ConvexReactClient,AuthLoading,Authenticated,Unauthenticated } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Fullscreen } from "./full-screen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>
        {children}
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <SignIn routing="hash"/>
          </div>
        </Unauthenticated>
        <AuthLoading>
           <Fullscreen label="Auth Loading ..."/>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
