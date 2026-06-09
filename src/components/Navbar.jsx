"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { textSplitTargets } from "@/components/SplitTextEffekt";
import { useEffect } from "react";

const NavBar = () => {
  const pageNavn = usePathname();

  useEffect(() => {
    textSplitTargets("[data-split]");
  }, [pageNavn]);

  return (
    <div className="hidden md:flex relative justify-center gap-10 lg:gap-70 p-4 lg:p-8 h-auto lg:h-25 w-full border-[var(--color-pink)] border-t-2 border-b-2">
      <div className="absolute top-0 left-0 w-0 h-0" style={{ borderTop: "30px solid var(--color-pink)", borderRight: "30px solid transparent" }} />
      <div className="absolute bottom-0 right-0 w-0 h-0" style={{ borderBottom: "30px solid var(--color-pink)", borderLeft: "30px solid transparent" }} />

      <Link href="/">
        <img src="/assets/icon/Logo_main.svg" height={200} width={200} />
      </Link>

      <nav className="nav-menu flex items-center gap-4 lg:gap-10">
        <Link href="/" data-split {...(pageNavn === "/" ? { "data-active": true } : {})} className={`nav-link whitespace-nowrap ${pageNavn === "/" ? "text-[var(--color-pink)]" : "text-white"}`}>
          HOME
        </Link>
        <Link href="/events" data-split {...(pageNavn === "/events" ? { "data-active": true } : {})} className={`nav-link whitespace-nowrap ${pageNavn === "/events" ? "text-[var(--color-pink)]" : "text-white"}`}>
          EVENTS
        </Link>
        <Link href="/book-table" data-split {...(pageNavn === "/book-table" ? { "data-active": true } : {})} className={`nav-link whitespace-nowrap ${pageNavn === "/book-table" ? "text-[var(--color-pink)]" : "text-white"}`}>
          BOOK TABLE
        </Link>
        <Link href="/contact" data-split {...(pageNavn === "/contact" ? { "data-active": true } : {})} className={`nav-link whitespace-nowrap ${pageNavn === "/contact" ? "text-[var(--color-pink)]" : "text-white"}`}>
          CONTACT US
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
