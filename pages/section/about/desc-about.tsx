// DescAbout.tsx
import Image from "next/image";
import { motion as m } from "framer-motion";
import Title from "@/pages/components/ui/title";
import Paragraph from "@/pages/components/ui/paragraph";

const DescAbout = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="relative flex flex-col md:flex-row justify-center w-full min-h-[30rem] items-center bg-[#FF8383] rounded-3xl p-4 md:p-8 mb-10 md:mb-20">
        {/* Image repositioned for responsive layout */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative w-full md:absolute md:left-72 md:top-0 md:transform md:-translate-y-1/4 md:max-w-md overflow-hidden rounded-2xl z-10 mb-8 md:mb-0"
        >
          <div className="relative w-full">
            <Image
              src="/images/footer-about.jpg"
              alt="Premium Quality Beads"
              objectFit="cover"
              width={400}
              height={100}
              quality={100}
              loading="eager"
              className="rounded-2xl w-full"
            />
          </div>
        </m.div>

        {/* Description section */}
        <div className="description flex flex-col w-full md:w-1/2 md:ml-auto md:mr-44 font-primaryFont">
          <Title
            motionType="fadeIn"
            classname="text-xl md:text-3xl text-center text-white w-full"
            duration={1}
          >
            <span className="text-[#A1D6CB] font-bold">Premium</span> Quality
            and <span className="text-[#A1D6CB] font-bold">Unique</span> Design{" "}
            <br />
            <span className="text-[#A1D6CB] font-bold">Leads</span> the Mobile
            Accessory Market
          </Title>

          <Paragraph
            motionType="fadeIn"
            duration={1.5}
            classname="mt-4 text-sm md:text-base text-center leading-6 text-white"
          >
            StrapMote has emerged as a prominent player in Indonesia's mobile
            accessory market, specializing in unique phone straps and bracelets.
            With a commitment to providing premium quality at affordable prices,
            StrapMote utilizes high-grade jade and premium materials in its
            products. This strategic focus on quality and affordability has
            allowed StrapMote to capture significant market attention, making
            its products highly sought after by consumers.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default DescAbout;
