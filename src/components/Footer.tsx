"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 border-t border-[var(--foreground)]/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src={isDark ? "/logo-dark.png" : "/logo-light.png"}
            alt="BOBOPHONE"
            width={150}
            height={40}
            className="h-8 w-auto"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground)]/60">
            <a href="#" className="hover:text-[var(--bobophone-primary)] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[var(--bobophone-primary)] transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-[var(--bobophone-primary)] transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--foreground)]/10 text-center text-sm text-[var(--foreground)]/50">
          <p>&copy; {new Date().getFullYear()} BOBOPHONE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
