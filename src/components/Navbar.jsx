"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { splitText } from "@/components/SplitTextEffekt";

const NavBar = () => {
  const pageNavn = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    { href: "/book-table", label: "BOOK TABLE" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <div className="sticky top-0 z-60 hidden md:flex justify-center gap-10 lg:gap-70 p-4 lg:p-8 h-auto lg:h-25 w-full border-[var(--color-pink)] border-t-2 border-b-2 bg-[var(--color-black)] lg:max-w-[1500px] max-h-[1000px] lg:mx-auto">
      <div className="absolute top-0 left-0 w-0 h-0" style={{ borderTop: "30px solid var(--color-pink)", borderRight: "30px solid transparent" }} />
      <div className="absolute bottom-0 right-0 w-0 h-0" style={{ borderBottom: "30px solid var(--color-pink)", borderLeft: "30px solid transparent" }} />

      <Link href="/">
        <img src="/assets/icon/Logo_main.svg" height={200} width={200} />
      </Link>

      <nav className="nav-menu flex items-center gap-4 lg:gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            data-split
            data-original={label}
            {...(pageNavn === href ? { "data-active": true } : {})}
            className={`nav-link whitespace-nowrap ${pageNavn === href ? "text-[var(--color-pink)]" : "text-white"}`}
            dangerouslySetInnerHTML={{
              __html: `
                <span class="layer layer--top">${splitText(label)}</span>
                <span class="layer layer--bottom">${splitText(label)}</span>
              `,
            }}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
