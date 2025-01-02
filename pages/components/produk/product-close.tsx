import Title from "@/pages/components/ui/title";
import Paragraph from "@/pages/components/ui/paragraph";

const ProductClose = () => {
  return (
    <div className="product-close container mx-auto px-4 py-8 md:py-12">
      <div className="content-product flex flex-col md:flex-row mx-auto max-w-7xl items-center justify-center gap-8 md:gap-6">
        <div className="description w-full md:w-1/2">
          <Title
            motionType="fadeIn"
            classname="text-xl md:text-2xl leading-relaxed md:leading-loose mb-6 md:mb-10 font-primaryFont text-center md:text-left"
          >
            Main Sales of
            <span className="text-[#A1D6CB] font-bold"> Premium</span> Mobile
            Accessories
          </Title>

          <Paragraph
            motionType="fadeIn"
            classname="font-primaryFont leading-normal text-sm md:text-base md:border-r-2 border-[#F38181] md:mr-10 text-center md:text-left mb-8 md:mb-0"
            duration={1.5}
          >
            It is expected that the Indonesian mobile accessory industry will
            make a significant contribution to the global market, similar to the
            prosperous period of the late 1980s, when the local industry rapidly
            developed thanks to strategic policies. In the same way, StrapMote
            has positioned itself as a key player in the export of high-quality
            mobile phone straps and bracelets. With a focus on environmentally
            friendly production and premium materials, StrapMote is ready to
            lead the industry in providing elegant, functional, and sustainable
            mobile phone accessories to global consumers.
          </Paragraph>
        </div>
        <div className="video-short w-full md:w-1/2 h-64 md:h-96 relative">
          <video
            className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/vid-product.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductClose;
