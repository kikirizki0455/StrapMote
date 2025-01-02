import React, { ReactNode } from "react";
import { motion as m, Variant } from "framer-motion";

type MotionTypes = "fadeIn" | "slideIn";

interface paragraphProps {
  children: ReactNode;
  motionType: MotionTypes;
  classname: string;
  duration: number;
}

const MotionVariant = (duration: number = 1.5): Record<MotionTypes, any> => ({
  fadeIn: {
    initial: { opacity: 0, x: -100 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  },
  slideIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: duration },
  },
});

const Paragraph: React.FC<paragraphProps> = ({
  children,
  motionType,
  classname = "",
  duration = 1.5,
}) => {
  const variant = MotionVariant(duration)[motionType];
  return (
    <>
      <div className="paragraph-motion">
        <m.p
          variants={variant} // Menghubungkan dengan variants yang telah didefinisikan
          initial="initial"
          whileInView="whileInView"
          animate="animate"
          className={classname}
        >
          {children}
        </m.p>
      </div>
    </>
  );
};

export default Paragraph;
