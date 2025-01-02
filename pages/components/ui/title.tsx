import React, { ReactNode } from "react";
import { motion as m, Variant } from "framer-motion";

type MotionTypes = "fadeIn" | "slideIn";

interface TitleProps {
  children: ReactNode;
  motionType: MotionTypes;
  classname?: string;
  duration?: number;
}

const MotionVariant = (duration: number = 2.0): Record<MotionTypes, any> => ({
  fadeIn: {
    initial: { y: "100%", opacity: 0 },
    whileInView: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
    viewport: { once: true },
  },
  slideIn: {
    initial: { opacity: 0, x: -100 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
    viewport: { once: true },
  },
});

const Title: React.FC<TitleProps> = ({
  children,
  motionType,
  classname = "",
  duration = 2.0,
}) => {
  const motionVariant = MotionVariant(duration)[motionType];

  return (
    <div className="title-motion">
      <m.h1 {...motionVariant} className={classname}>
        {children}
      </m.h1>
    </div>
  );
};

export default Title;
