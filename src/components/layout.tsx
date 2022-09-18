import Head from "next/head";
import { ReactNode } from "react";
import { HeaderTitle } from "@/components/header";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type LayoutProps = {
  title: string;
  desc: string;
  children: ReactNode;
  className?: string;
};

interface NestedLayoutProps extends LayoutProps {
  backToUrl: string;
  backToName: string;
  name: string;
}

export const Layout = ({ children, className, title, desc }: LayoutProps) => {
  return (
    <div className="mx-auto flex h-auto min-h-screen max-w-2xl flex-col md:container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar my-5">
        <HeaderTitle className="navbar-start" />
      </header>

      <main className={`grow px-6 ${className && className}`}>{children}</main>

      <div className="divider" />
      <footer className="mb-2 flex flex-col items-center justify-center text-slate-500">
        <p>Created in a weekend, just be patient...</p>
        <p>With &lt;3 By Sunglassers</p>
      </footer>
    </div>
  );
};

export const NestedPageLayout = ({
  children,
  className,
  title,
  desc,
  name,
  backToName,
  backToUrl,
}: NestedLayoutProps) => {
  return (
    <div className="mx-auto flex h-auto min-h-screen max-w-2xl flex-col md:container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar my-5 border-b border-neutral">
        <div className="navbar-start">
          <Link href={backToUrl}>
            <button className="btn btn-ghost gap-2 text-3xl font-bold normal-case">
              <ArrowLeftIcon className="h-8 w-8" />
              {backToName}
            </button>
          </Link>
        </div>
        <div className="navbar-end pr-4 text-2xl font-bold normal-case">
          {name}
        </div>
      </header>

      <main className={`grow px-6 ${className && className}`}>{children}</main>

      <div className="divider" />
      <footer className="mb-2 flex flex-col items-center justify-center text-slate-500">
        <p>Created in a weekend, just be patient...</p>
        <p>With &lt;3 By Sunglassers</p>
      </footer>
    </div>
  );
};

export const WeirdLayout = ({
  children,
  className,
  title,
  desc,
}: LayoutProps) => {
  return (
    <div className="mx-auto flex h-auto min-h-screen max-w-2xl flex-col md:container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar my-5">
        <div className="navbar-start">
          <Link href="/">
            <button className="btn btn-ghost gap-2 text-3xl font-bold normal-case">
              <ArrowLeftIcon className="h-8 w-8" />
              Cursos
            </button>
          </Link>
        </div>
        <div className="navbar-center text-2xl font-bold normal-case">
          2A Manana
        </div>
        <div className="btn-group navbar-end">
          <Link href="/curso/2A-manana/boletines" passHref>
            <button className="btn btn-primary">Boletines</button>
          </Link>
          <Link href="/curso/2A-manana/asistencia" passHref>
            <button className="btn btn-secondary">Asistencia</button>
          </Link>
        </div>
      </header>

      <main className={`grow px-6 ${className && className}`}>{children}</main>

      <div className="divider" />
      <footer className="mb-2 flex flex-col items-center justify-center text-slate-500">
        <p>Created in a weekend, just be patient...</p>
        <p>With &lt;3 By Sunglassers</p>
      </footer>
    </div>
  );
};
