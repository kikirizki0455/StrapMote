// About.tsx
import CardContent from "../components/ui/card-content";
import { motion as m } from "framer-motion";
import DescAbout from "./about/desc-about";
import Title from "@/pages/components/ui/title";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="header flex flex-col lg:flex-row w-full mt-10   md:mt-10 justify-center px-4 md:px-8"
      >
        <div className="content my-auto w-full lg:w-1/2">
          <div className="title">
            <Title
              motionType="fadeIn"
              classname="text-2xl md:text-3xl max-w-4xl mx-auto font-semibold text-center lg:text-left"
            >
              Indonesia's Leading Producer of <br /> Premium Mobile Accessories
            </Title>
            <m.div
              whileInView={{
                y: "0%",
                opacity: 1,
              }}
              initial={{
                y: "100%",
                opacity: 0,
              }}
              transition={{
                duration: 1.0,
              }}
              className="border-bg border-b-2 border-[#F38181] mx-auto lg:ml-7 w-1/2 mb-6 md:mb-10 mt-4"
            ></m.div>
          </div>
          <div className="description">
            <m.p
              whileInView={{
                y: "0%",
                opacity: 1,
              }}
              initial={{
                y: "100%",
                opacity: 0,
              }}
              transition={{
                duration: 1.0,
              }}
              className="max-w-4xl mx-auto leading-loose text-sm md:text-base text-center lg:text-left px-4 lg:px-0"
            >
              Indonesia is known for its craftsmanship and innovation in
              producing high-quality mobile accessories for the global market.
              Every year, a significant portion of premium phone straps and
              wristbands are exported from Indonesia, blending style,
              functionality, and sustainability. At StrapMote, we prioritize
              eco-friendly production processes, ensuring our products not only
              meet high standards of quality but also contribute to a greener
              planet.
            </m.p>
          </div>
        </div>
        <div className="card-header flex flex-col md:flex-row gap-4 my-10 mx-auto">
          <CardContent
            motionType="slideInRight"
            imageUrl="/images/background-carousel.jpg"
            imageAlt="Strap Premium Quality"
            targetNumber={10000}
            increment={100}
            interval={20}
            title="Sold"
            duration={2.0}
          >
            ++
          </CardContent>

          <CardContent
            motionType="slideInRight"
            imageUrl="/images/background-carousel.jpg"
            imageAlt="Strap Premium Quality"
            targetNumber={1000}
            increment={10}
            interval={30}
            isReversed={true}
            title="Trusted Client"
            duration={1.5}
          />
        </div>
      </div>
      <DescAbout />
    </>
  );
};

export default About;
