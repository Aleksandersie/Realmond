import React from "react";
import ReactDOM from "react-dom/client";
import { UsersList } from "./pages/users-list/users-list.page";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  </React.StrictMode>,
);
