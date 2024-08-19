import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
// import Header from "@/components/Header/Header";
// import CustomReduxProvider from "@/redux/provider";
// import { AxiosInterceptor } from "@/utils/AxiosFetch";
// import PageLoader from "@/components/PageLoader/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Test Title",
    description: "Test Description",
    openGraph: {
        title: "Test Title",
        description: "Test Description",
        images: [
            {
                url: "https://static8.depositphotos.com/1012223/980/i/950/depositphotos_9803930-stock-photo-demo-cubes.jpg",
                alt: "Icon",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <CustomReduxProvider>
                    <AxiosInterceptor>
                        <PageLoader />
                        <Header /> */}
                {children}
                {/* </AxiosInterceptor>
                </CustomReduxProvider> */}
            </body>
        </html>
    );
}
