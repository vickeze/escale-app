import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function Root() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-[100dvh] grid grid-rows-[50px_1fr] lg:grid-rows-none lg:grid-cols-[300px_1fr]">
        <Navbar />
        <main className="h-full">
          <Outlet />
        </main>
      </div>{" "}
    </QueryClientProvider>
  );
}
export default Root;
