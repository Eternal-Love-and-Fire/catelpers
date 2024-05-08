import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export const Nav = ({ classname }: { classname?: string }) => {
  return (
    <nav className={`${classname}`}>
      <Link className={buttonVariants({ variant: "ghost" })} to={"/about"}>
        About
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} to={"/works"}>
        Works
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={buttonVariants({ variant: "ghost" })}>
          Helpers
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center text-xl font-bold">
          <DropdownMenuLabel>
            <Link to={`/react`} className={buttonVariants({ variant: "link" })}>
              React
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Link
              to={`/laravel`}
              className={buttonVariants({ variant: "link" })}
            >
              Laravel
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Link
              to={`/scripts`}
              className={buttonVariants({ variant: "link" })}
            >
              Scripts
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>
            <Link to={`/other`} className={buttonVariants({ variant: "link" })}>
              Other
            </Link>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className={buttonVariants({ variant: "ghost" })}>
          Contact
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex items-center text-xl font-bold">
          <DropdownMenuItem>
            <Link
              to={`https://github.com/Eternal-Love-and-Fire`}
              target="_blank"
              className={buttonVariants({ variant: "link" })}
            >
              <FaGithub className="text-2xl" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to={`https://t.me/EternalLoveAndFire`}
              target="_blank"
              className={buttonVariants({ variant: "link" })}
            >
              <FaTelegram className="text-2xl" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=evhenisssss@gmail.com`}
              target="_blank"
              className={buttonVariants({ variant: "link" })}
            >
              <CgMail className="text-2xl" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to={`https://www.linkedin.com/in/yevgen-kotyk-124012179/`}
              target="_blank"
              className={buttonVariants({ variant: "link" })}
            >
              <FaLinkedin className="text-2xl" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link className={buttonVariants({ variant: "ghost" })} to={"/resume"}>
        Resume
      </Link>
    </nav>
  );
};
