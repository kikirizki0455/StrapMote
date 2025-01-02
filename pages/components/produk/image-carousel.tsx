import React from "react";
import Image from "next/image";

interface ImageCarouselProps {
  image: string;
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ image, alt = "" }) => {
  return (
    <div className="relative h-[85vh] w-full">
      {/* Gambar menggunakan Next.js Image */}
      <Image
        src={image}
        alt={alt}
        layout="fill" // Membuat gambar memenuhi container
        objectFit="contain" // Mengontrol cara gambar di-scaling
        quality={100} // Mengatur kualitas gambar (1-100)
        className="absolute"
      />
    </div>
  );
};

export default ImageCarousel;
