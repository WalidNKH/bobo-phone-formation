"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Handle scroll hide/show
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Handle dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else if (prefersDark) {
      // Pas de choix sauvegardé, suit la préférence système
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[9999]">
      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex fixed left-1/2 -translate-x-1/2 items-center justify-center z-[9999] transition-all duration-300 ${
          isVisible ? "top-5" : "-top-24"
        }`}
      >
        <div className="flex items-center gap-4 px-8 py-4 rounded-full shadow-lg border border-[var(--glass-border)] glass-background min-w-fit">
          <button
            onClick={() => scrollToSection("hero")}
            className="mr-4 cursor-pointer hover:opacity-80 transition"
          >
            <Image
              src={isDark ? "/logo-dark.png" : "/logo-light.png"}
              alt="BOBOPHONE"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </button>

          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollToSection("programme")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition cursor-pointer text-sm font-medium whitespace-nowrap"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition cursor-pointer text-sm font-medium whitespace-nowrap"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition cursor-pointer text-sm font-medium whitespace-nowrap"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition cursor-pointer text-sm font-medium whitespace-nowrap"
            >
              FAQ
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <a
              href="#tarifs"
              className="bg-[var(--bobophone-primary)] text-black px-5 py-2 rounded-full font-semibold hover:bg-[var(--bobophone-primary-dark)] transition text-sm whitespace-nowrap btn-bobophone"
            >
              <span className="flex items-center gap-1">
                <span>S&apos;inscrire</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden fixed left-0 right-0 px-4 z-[9999] transition-all duration-300 ${
          isVisible ? "top-5" : "-top-24"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-full shadow-lg border border-[var(--glass-border)] glass-background">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer hover:opacity-80 transition"
          >
            <Image
              src={isDark ? "/logo-dark.png" : "/logo-light.png"}
              alt="BOBOPHONE"
              width={120}
              height={30}
              className="h-6 w-auto"
              priority
            />
          </button>

          <div className="flex items-center gap-2">
            {/* Dark mode toggle mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <a
              href="#tarifs"
              className="bg-[var(--bobophone-primary)] text-black px-4 py-2 rounded-full font-semibold text-sm"
            >
              S&apos;inscrire
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-11/12 max-w-md transition-all duration-300 ease-out z-[9998] ${
          isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[var(--background)]/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[var(--glass-border)] p-6">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection("programme")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition py-3 px-4 rounded-lg hover:bg-[var(--foreground)]/5 text-left font-medium"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection("tarifs")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition py-3 px-4 rounded-lg hover:bg-[var(--foreground)]/5 text-left font-medium"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition py-3 px-4 rounded-lg hover:bg-[var(--foreground)]/5 text-left font-medium"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[var(--foreground)] hover:text-[var(--bobophone-primary)] transition py-3 px-4 rounded-lg hover:bg-[var(--foreground)]/5 text-left font-medium"
            >
              FAQ
            </button>
            <a
              href="#tarifs"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[var(--bobophone-primary)] text-black px-6 py-4 rounded-full font-semibold text-center mt-2"
            >
              S&apos;inscrire maintenant
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[9997]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Spacer */}
      <div className="h-24"></div>
    </header>
  );
}
