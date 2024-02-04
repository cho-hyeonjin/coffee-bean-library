import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
