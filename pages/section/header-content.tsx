import About from "./about";
import HeroCarousel from "../components/ui/hero-carousel";
import Gallery from "./gallery";
import HeaderProduct from "../components/produk/header-product";
import Team from "./our-team/team";
import ParallaxProduct from "../components/produk/paralax-product";

const HeaderContent = () => {
  return (
    <div className="">
      <HeroCarousel
        image="/images/vid-background-1.mp4"
        alt="background-carousel"
      />
      <About />
      <Gallery />
      <HeaderProduct />
      <ParallaxProduct />
      <Team />
    </div>
  );
};

export default HeaderContent;
