import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: "hero-carousel", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "product", label: "Products" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

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
    }, 100);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur shadow-lg" : "bg-transparent"
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
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  toggleMenu();
                  scrollToSection(item.id);
                }}
                className="text-white text-lg hover:text-gray-300 uppercase tracking-wider transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
