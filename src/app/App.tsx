import { RouterProvider } from "react-router-dom";
import { router } from "@/pages/router";

import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
