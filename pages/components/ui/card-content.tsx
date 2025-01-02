import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import { motion as m, Variant } from "framer-motion";

type MotionTypes = "fadeIn" | "slideInRight";

interface CardProps {
  children?: ReactNode;
  motionType: MotionTypes;
  className?: string;
  imageUrl: string;
  imageAlt: string;
  targetNumber: number;
  increment: number;
  interval: number;
  isReversed?: boolean;
  title: string;
  duration: number;
}

const MotionVariant = (duration: number = 2.0): Record<MotionTypes, any> => ({
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
  },
  slideInRight: {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  },
});

const CardContent: React.FC<CardProps> = ({
  motionType,
  className = "",
  imageUrl,
  imageAlt,
  targetNumber,
  increment,
  interval,
  isReversed = false,
  title,
  children,
  duration = 2.0,
}) => {
  const [count, setCount] = useState(0);
  const motionVariant = MotionVariant(duration)[motionType];

  useEffect(() => {
    let currentNumber = 0;
    const intervalId = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber += increment;
        setCount(currentNumber);
      } else {
        clearInterval(intervalId);
        setCount(targetNumber); // Memastikan angka akhir tepat
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [targetNumber, increment, interval]);

  const ImageComponent = (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={320}
      height={700}
      className="m-4 rounded-xl"
    />
  );

  const ContentComponent = (
    <div className="m-4 bg-[#95E1D3] rounded-xl flex justify-center flex-col items-center w-[20rem] h-[25rem]">
      <h1 className="text-4xl text-white font-semibold">
        {count}
        {children}
      </h1>
      <h1 className="mt-4 text-2xl font-bold font-primaryFont text-white">
        {title}
      </h1>
    </div>
  );

  return (
    <m.div
      variants={motionVariant}
      initial="initial"
      whileInView="whileInView"
      className={`${className} ${isReversed ? "mt-10" : ""}`}
    >
      {isReversed ? (
        <>
          {ContentComponent}
          {ImageComponent}
        </>
      ) : (
        <>
          {ImageComponent}
          {ContentComponent}
        </>
      )}
    </m.div>
  );
};

export default CardContent;
