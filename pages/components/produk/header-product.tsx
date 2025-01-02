import { useState } from "react";
import ProductClose from "./product-close";
import ParallaxProduct from "./paralax-product";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "./product-images";

const HeaderProduct = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    api?.scrollTo(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    api?.scrollTo(prevIndex);
  };

  return (
    <>
      <div
        id="product"
        className="header w-full min-h-screen mt-6 md:mt-10 font-primaryFont px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
          Our Product
        </h1>
        <div className="border-b-2 border-[#A1D6CB] w-32 md:w-40 mx-auto mb-6 md:mb-10"></div>
        <p className="text-gray-400 text-center text-sm md:text-base w-full max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          Learn more about our product. You can see our product here.
        </p>

        <div className="content-product relative">
          <div className="design bg-[#A1D6CB] opacity-80 absolute left-0 bottom-0 h-[20rem] md:h-[25rem] w-full md:w-1/2 transform translate-y-12 z-10"></div>

          <h1 className="text-center text-lg md:text-xl font-primaryFont font-semibold mb-4 md:mb-6">
            Best Seller
          </h1>

          <div className="top-seller w-full md:w-3/4 lg:w-1/2 mx-auto mb-8 md:mb-12">
            <Card>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-10">
                <Image
                  src="/images/produk/gantungan5.jpeg"
                  alt="premium seller"
                  width={280}
                  height={280}
                  className="rounded-lg w-full h-auto"
                />
                <Image
                  src="/images/produk/gantungan7.jpeg"
                  alt="premium seller"
                  width={280}
                  height={280}
                  className="rounded-lg w-full h-auto"
                />
                <Image
                  src="/images/produk/g1.jpeg"
                  alt="premium seller"
                  width={280}
                  height={280}
                  className="rounded-lg w-full h-auto"
                />
                <Image
                  src="/images/produk/gantungan11.jpeg"
                  alt="premium seller"
                  width={280}
                  height={280}
                  className="rounded-lg w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

          <h1 className="text-sm md:text-base text-center mb-6 md:mb-10 px-4">
            5000+ products sold and over 900 clients satisfied with{" "}
            <span className="text-lg md:text-xl font-semibold text-[#F38181]">
              premium quality
            </span>
          </h1>

          <div className="border-b-2 border-[#A1D6CB] w-4/5 md:w-1/2 mx-auto mb-6 md:mb-10"></div>

          <Carousel
            opts={{
              align: "center",
            }}
            className="w-[90%] md:w-[80%] mx-auto relative z-20"
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 mb-6 md:mb-8"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-4 md:p-6">
                        <Link href={`section/product/${image.slug}`} passHref>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full rounded-xl h-auto object-contain"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="close mt-12 md:mt-20">
          <ProductClose />
        </div>
      </div>
    </>
  );
};

export default HeaderProduct;
