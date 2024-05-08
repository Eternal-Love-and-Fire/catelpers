import { Header } from "@/widgets/header/Header";
import { Outlet } from "react-router-dom";

export const DefaultRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
