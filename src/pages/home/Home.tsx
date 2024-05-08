import { buttonVariants } from "@/components/ui/button";
import Typewriter from "@/components/user-ui/TypeWriter";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="w-full h-full">
      <h3 className="mt-48 text-center font-semibold tracking-widest">
        <Typewriter
          text={
            "Hello, I'm Yevgen Kotyk, a hard-working and creative web developer. With experience in JS, React, PHP, and Laravel."
          }
        />
      </h3>
      <div className="w-fit my-8 mx-auto flex gap-8">
        <Link className={buttonVariants({ variant: "ghost" })} to={`/works`}>
          <span className="text-xl border-b-2 border-black dark:border-white">
            Look for other Projects
          </span>
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} to={`/works`}>
          <span className="text-xl border-b-2 border-black dark:border-white">
            Look for Helpers
          </span>
        </Link>
      </div>
    </main>
  );
};
