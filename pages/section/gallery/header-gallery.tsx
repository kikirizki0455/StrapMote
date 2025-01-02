import React, { useState, useEffect } from "react";
import { images } from "./images-data";
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
    small: "col-span-6 sm:col-span-3 md:col-span-2 row-span-1",
    medium: "col-span-6 sm:col-span-4 md:col-span-3 row-span-1 md:row-span-2",
    large: "col-span-6 sm:col-span-6 md:col-span-4 row-span-1 md:row-span-2",
  };

  useEffect(() => {
    if (!api) return;
    api.scrollTo(selectedIndex);
  }, [api, selectedIndex, isOpen]);

  return (
    <div className="w-full px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-primaryFont">
            Our Gallery
          </h1>
          <div className="border-b-2 border-[#F38181] w-40 sm:w-60 md:w-80 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => {
            const sizeClass =
              sizeClasses[image.size as keyof typeof sizeClasses];
            return (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-lg ${sizeClass} cursor-pointer`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="aspect-square sm:aspect-auto min-h-[200px] w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="w-[95vw] max-h-[90vh] p-2 sm:p-4 md:p-6">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-2 sm:p-4">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 sm:left-0" />
              <CarouselNext className="hidden sm:flex -right-4 sm:right-0" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HeaderGallery;
