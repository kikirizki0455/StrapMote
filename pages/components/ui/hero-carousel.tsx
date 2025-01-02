import React from "react";

interface HeroCarouselProps {
  image: string;
  alt: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ image, alt = "" }) => {
  const scrollToSection = (sectionId: string) => {
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
  };

  return (
    <div id="hero-carousel" className="relative h-screen">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={image} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="carousel-content relative z-10 text-white flex items-center justify-center h-full px-4 md:px-8">
        <div className="content text-center md:text-left md:max-w-lg">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Best Producer of Stylish Mobile Accessories
          </h1>
          <p className="text-sm md:text-base mb-6">
            We specialize in high-quality phone straps and wristbands that offer
            both style and practicality.
          </p>
          <button
            onClick={() => scrollToSection("product")}
            className="rounded px-4 py-2 bg-[#F38181] text-[#A1D6CB] hover:bg-[#A1D6CB] hover:text-[#F38181] duration-200"
          >
            <h1>Our Product</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
