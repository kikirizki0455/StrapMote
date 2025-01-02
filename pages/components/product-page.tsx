import { useRouter } from "next/router";
import { images } from "../components/produk/product-images";
import ImageCarousel from "./produk/image-carousel";
import { ShoppingCart } from "lucide-react"; // Pastikan Anda sudah menginstal lucide-react
import { FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";
import Title from "./ui/title";

interface Product {
  slug: string;
  src: string;
  alt: string;
  title: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  price: string;
  shortDesc: string;
}

interface DescriptionSectionProps {
  title?: string;
  description?: string;
}

interface Section {
  title?: string;
  description?: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  title,
  description,
}) => {
  if (!title || !description) return null;

  return (
    <div className="description-section max-w-3xl mx-auto w-full py-12 first:pt-6 last:pb-16">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        {title}
      </h2>
      <div className="flex justify-center items-center mb-8">
        <div className="border-b-2 border-[#A1D6CB] w-24"></div>
      </div>
      <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (router.isReady) {
      setIsLoading(false);
    }
  }, [router.isReady]);
  const product = images.find((item) => item.slug === slug) as
    | Product
    | undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Produk tidak ditemukan.</p>
      </div>
    );
  }
  // WhatsApp number - replace with your actual number
  const waNumber = "62881022022368";

  const handleWhatsAppClick = () => {
    const message = `Hi, saya tertarik dengan produk ${product?.title}. Saya ingin custom order.`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Produk tidak ditemukan.</p>
      </div>
    );
  }

  const sections: Section[] = [
    { title: product.title2, description: product.description1 },
    { title: product.title3, description: product.description2 },
    { title: product.title3, description: product.description3 },
    { title: product.title4, description: product.description4 },
    { title: product.title5, description: product.description5 },
  ];

  return (
    <div className="font-primaryFont min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <ImageCarousel image={product.src} alt={product.alt} />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Product Title */}
        <div className="text-center mb-16">
          <Title
            motionType="fadeIn"
            duration={1.5}
            classname="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
          >
            {product.title}
          </Title>
          <div className="flex justify-center items-center">
            <div className="border-b-2 border-[#A1D6CB] w-64"></div>
          </div>
        </div>

        {/* Description Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <DescriptionSection
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>

        {/* Pricing Table */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#A1D6CB] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#A1D6CB] font-semibold">
                    {product.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-s">
                    {product.shortDesc}
                  </td>
                  <td className="px-6 py-4 text-gray-600 flex  ">
                    <a
                      href="https://www.tiktok.com/@uniqcharmm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok className="w-8 h-8 cursor-pointer p-1 hover:text-blue-400" />
                    </a>
                    <a
                      href="https://shopee.co.id/ghinaayum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 cursor-pointer p-1 hover:text-blue-400"
                    >
                      <ShoppingCart />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Order Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Want to Customize Your Order?
          </h3>
          <p className="text-gray-600 mb-8">
            We offer customization options to match your specific needs. Contact
            us via WhatsApp to discuss your custom order!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
