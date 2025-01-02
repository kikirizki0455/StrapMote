import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = async (sectionId: string) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Tunggu agar halaman selesai dimuat
  };

  return (
    <nav
      className={`fixed mx:w-full w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur shadow-lg " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <button onClick={() => scrollToSection("hero-carousel")}>
            <h1>StrapMote</h1>
          </button>
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("hero-carousel")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("gallery")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("product")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#"
              className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
