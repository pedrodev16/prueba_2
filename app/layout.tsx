"use client";
import { FC, PropsWithChildren } from "react";
import '@/app/ui/globals.css';
import { SessionProvider } from "next-auth/react";
const RootLayout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <head>
                <title>My App</title>
                <meta name="description" content="My App Description" />

            </head>

            <body>
                <SessionProvider>
                    {children}
                </SessionProvider></body>
        </html>
    );
}

export default RootLayout;