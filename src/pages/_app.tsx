import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { Manrope } from "next/font/google";
import Meta from "@/components/Meta";
const manrope = Manrope({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={manrope.className}>
                <Meta></Meta>
                <Component {...pageProps} />
            </div>
        </QueryClientProvider>
    );
}
