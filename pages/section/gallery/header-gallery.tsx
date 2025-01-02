import React, { useState, useEffect } from "react";
import { images } from "../../../data/images-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const HeaderGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const sizeClasses = {
    small: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
    medium: "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4",
    large: "col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6",
  };

  useEffect(() => {
    if (!api) return;
    api.scrollTo(selectedIndex);
  }, [api, selectedIndex, isOpen]);

  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Our Gallery</h1>
          <div className="border-b-2 border-[#F38181] w-24 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${
                sizeClasses[image.size as keyof typeof sizeClasses]
              } 
                         group overflow-hidden rounded-xl shadow-lg`}
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 
                           group-hover:scale-110 group-hover:brightness-90"
                />
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
                              transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="w-11/12 max-w-5xl p-0">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="aspect-[16/9] w-full p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 h-12 w-12" />
              <CarouselNext className="-right-12 h-12 w-12" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HeaderGallery;
