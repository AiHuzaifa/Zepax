"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds a gentle fade-up to elements marked with `data-reveal` as they enter the viewport. */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("reveal");
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
