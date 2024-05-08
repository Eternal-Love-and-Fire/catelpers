import CustomBreadcrumb from "@/components/user-ui/CustomBreadcrumb";
import { Header } from "@/widgets/header/Header";
import { Outlet } from "react-router-dom";

export const DefaultRoot = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <Header />
      <CustomBreadcrumb />
      <Outlet />
    </div>
  );
};
