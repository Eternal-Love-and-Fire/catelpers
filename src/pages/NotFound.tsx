import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for does not exist.
      </p>
      <Link className={buttonVariants({ variant: "outline" }) + 'py-4 px-4 rounded-3xl'} to={`/`}>
        <span className="text-3xl">Go Home</span>
      </Link>
    </div>
  );
};
