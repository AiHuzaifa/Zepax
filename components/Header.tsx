"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);
  const close = () => setOpen(false);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="ZEPAX Technology home" onClick={close}>
          <img src="/zepax-logo.png" alt="ZEPAX Technology" width={102} height={34} />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact/" className="btn btn-primary btn-sm header-cta">
          Book a free call <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav id="mobile-nav" className={"mobile-nav" + (open ? " is-open" : "")} aria-label="Mobile navigation">
        <Link href="/" onClick={close}>
          Home
        </Link>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact/" className="btn btn-primary" onClick={close}>
          Book a free 30-min call <ArrowRight size={18} />
        </Link>
      </nav>
    </header>
  );
}
