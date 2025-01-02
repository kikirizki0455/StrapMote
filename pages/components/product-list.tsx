import Link from "next/link";
import { images } from "../components/produk/product-images"; // Asumsi data produk ada di sini

const ProductList = () => {
  return (
    <div>
      <h1>Daftar Produk</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="product-item">
            <Link href={`/produk/${image.slug}`} passHref>
              <a>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-xl border border-black object-contain"
                />
                <h3>{image.alt}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
