import Locator from "../../section/footer/locator";
import { Instagram, ShoppingCart } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="footer w-full overflow-hidden">
      <div className="gmaps w-full">
        <Locator />
      </div>
      <div className="footer-content w-full min-h-[25rem] bg-[#F38181] mt-10 py-5 relative px-4">
        <div className="w-full flex flex-col md:flex-row p-2 mt-10 font-primaryFont text-white">
          {/* Title Section */}
          <div className="title text-center w-full md:w-1/3 md:ml-0 lg:ml-72 flex flex-col justify-center mb-8 md:mb-4">
            <h1 className="text-xl md:text-2xl font-bold">StrapMote</h1>
            <div className="border-b-2 border-[#A1D6CB] w-32 mx-auto my-2"></div>
            <p className="leading-normal mx-auto mt-4 px-3 text-sm md:text-base">
              Our company consists of a team of professionals who pay attention
              to every detail, with a commitment to ensuring customer
              satisfaction and trust in our products.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Instagram className="w-6 h-6 md:w-8 md:h-8 cursor-pointer border border-white rounded-full p-1" />
              <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 cursor-pointer border border-white rounded-full p-1" />
              <FaTiktok className="w-6 h-6 md:w-8 md:h-8 cursor-pointer border border-white rounded-full p-1 text-white" />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="contact-us w-full md:w-1/2 gap-4 md:gap-2 flex flex-col items-center py-2">
            {/* Address */}
            <div className="address text-center w-full md:w-1/3 mb-4">
              <h1 className="text-base md:text-lg font-semibold">Address</h1>
              <div className="border-b-2 border-[#A1D6CB] w-32 mx-auto my-2"></div>
              <p className="mt-2 text-sm md:text-base px-4">
                Jl. Babakan Loa Rancaekek Kab. Bandung, Jawa Barat 40394
              </p>
            </div>

            {/* Work Hours */}
            <div className="work-hours text-center w-full md:w-1/3 mb-4">
              <h1 className="text-base md:text-lg font-semibold">Work Hours</h1>
              <div className="border-b-2 border-[#A1D6CB] w-32 mx-auto my-2"></div>
              <p className="mt-2 text-sm md:text-base">Mon - Sun 9am - 5pm</p>
            </div>

            {/* Contact Us */}
            <div className="contact text-center w-full md:w-1/3 mb-4">
              <h1 className="text-base md:text-lg font-semibold">Contact Us</h1>
              <div className="border-b-2 border-[#A1D6CB] w-32 mx-auto my-2"></div>
              <p className="mt-2 text-sm md:text-base">
                Mail: kikirizki0455@gmail.com
              </p>
              <p className="mt-2 text-sm md:text-base">
                Phone: +62 8102 2022 368
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-white text-sm md:text-base text-center absolute bottom-0 left-0 right-0 py-3">
          Copyright &copy; 2024 StrapMote. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
