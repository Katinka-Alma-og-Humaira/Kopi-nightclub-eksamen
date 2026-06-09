"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pageNavn = usePathname();

  return (
    <div className="relative flex justify-center gap-70 p-8 h-25 w-full border-[var(--color-pink)] border-t-2 border-b-2">
      <div className="absolute top-0 left-0 w-0 h-0" style={{ borderTop: "30px solid var(--color-pink)", borderRight: "30px solid transparent" }} />
      <div className="absolute bottom-0 right-0 w-0 h-0" style={{ borderBottom: "30px solid var(--color-pink)", borderLeft: "30px solid transparent" }} />

      <Link href="/">
        <img src="/assets/icon/Logo_main.svg" height={200} width={200} />
      </Link>

      <nav className="flex items-center gap-10">
        <div className="flex flex-col items-center">
          <Link href="/" className={pageNavn === "/" ? "text-[var(--color-pink)]" : "text-white"}>
            HOME
          </Link>
          {pageNavn === "/" && <img src="/assets/bottom_line.png" alt="" width={50} />}
        </div>

        <div className="flex flex-col items-center">
          <Link href="/events" className={pageNavn === "/events" ? "text-[var(--color-pink)]" : "text-white"}>
            EVENTS
          </Link>
          {pageNavn === "/events" && <img src="/assets/bottom_line.png" alt="" width={50} />}
        </div>

        <div className="flex flex-col items-center">
          <Link href="/book-table" className={pageNavn === "/book-table" ? "text-[var(--color-pink)]" : "text-white"}>
            BOOK TABLE
          </Link>
          {pageNavn === "/book-table" && <img src="/assets/bottom_line.png" alt="" width={50} />}
        </div>

        <div className="flex flex-col items-center">
          <Link href="/contact" className={pageNavn === "/contact" ? "text-[var(--color-pink)]" : "text-white"}>
            CONTACT US
          </Link>
          {pageNavn === "/contact" && <img src="/assets/bottom_line.png" alt="" width={50} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
