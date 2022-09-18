import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

type PropsWithClassName = {
  className?: string;
};

export const HeaderTitle = ({ className }: PropsWithClassName) => {
  return (
    <div className={className && className}>
      <Link href="/">
        <a className="btn btn-ghost text-3xl font-bold normal-case">
          CFS
        </a>
      </Link>
    </div>
  );
};

export const HeaderMenuButton = ({
  className,
  htmlFor,
}: PropsWithClassName & { htmlFor?: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${
        className && className
      } btn btn-ghost btn-square drawer-button lg:hidden`}
    >
      <Bars3Icon className="h-5 w-5 md:h-6  md:w-6" />
    </label>
  );
};

export const HeaderContactUsButton = ({ className }: PropsWithClassName) => {
  return (
    <Link href="/contact" passHref>
      <button
        className={`btn btn-outline btn-secondary ${className && className}`}
      >
        Contact Us
      </button>
    </Link>
  );
};

export const HeaderLoginButton = ({ className }: PropsWithClassName) => {
  return (
    <Link href="/login" passHref>
      <button
        className={`btn btn-outline btn-secondary ${className && className}`}
      >
        Log In
      </button>
    </Link>
  );
};
