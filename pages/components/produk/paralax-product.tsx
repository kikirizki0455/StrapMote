import React from "react";

const ParallaxProduct = () => {
  return (
    <div className="overflow-hidden mt-20 font-primaryFont">
      {/* Section dengan efek parallax */}
      <div
        className="min-h-[40vh] md:min-h-[60vh] bg-fixed bg-center bg-cover bg-no-repeat relative w-full"
        style={{
          backgroundImage: `url('/images/paralax-bg.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay transparan untuk kontras */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Konten di tengah parallax */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Sales of
              <span className="font-bold text-[#A1D6CB]">
                Premium Accessory
              </span>
              Products in Indonesia Paraphrase text
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxProduct;
