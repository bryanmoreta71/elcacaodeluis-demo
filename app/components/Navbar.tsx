"use client";

import { useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#capacity", label: "Capacity" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#FBF7F1]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#5B3A29] text-sm font-black text-[#FBF7F1]">
            CL
          </span>
          <span className="text-lg font-bold tracking-tight text-[#2B1B12]">
            EL CACAO <span className="text-[#B2802B]">DE LUIS</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5B4A3F] transition-colors hover:text-[#B2802B]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md bg-[#5B3A29] px-5 py-2.5 text-sm font-bold text-[#FBF7F1] transition-colors hover:bg-[#2B1B12] lg:inline-block"
        >
          Request a Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-[#2B1B12] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-[#FBF7F1] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#5B4A3F] hover:text-[#B2802B]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#5B3A29] px-5 py-2.5 text-center text-sm font-bold text-[#FBF7F1]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
