import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.css";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
