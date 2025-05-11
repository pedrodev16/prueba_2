import { FC, PropsWithChildren } from "react";
import '@/app/ui/globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <head>
                <title>My App</title>
                <meta name="description" content="My App Description" />

            </head>

            <body>
                {children}</body>
        </html>
    );
}

export default RootLayout;