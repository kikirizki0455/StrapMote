import Image from "next/image";
import { Instagram } from "lucide-react";

const HeaderTeam = () => {
  const images = [
    {
      id: 1,
      src: "/images/team/owner-transform.jpeg",
      alt: "team 1",
      name: "Salma Anhalsali",
      description: "CEO & Founder",
      instagram: "https://www.instagram.com/anhalsali/",
    },
    {
      id: 2,
      src: "/images/team/owner-2.jpg",
      alt: "team 2",
      name: "Rizki Rahmat Hidayat",
      description: "Digital Marketing",
      instagram: "https://www.instagram.com/rizkiii_rh/",
    },
  ];

  return (
    <div className="header-team w-full text-center font-primaryFont mt-10 px-4">
      <h1 className="text-3xl font-semibold">Our Team</h1>
      <div className="border-b-2 border-[#F38181] w-40 mt-10 mx-auto"></div>
      <div className="title mt-10 text-gray-400 max-w-2xl mx-auto">
        <p>
          We have a team of highly skilled, committed and motivated
          professionals specializing in respective core fields.
        </p>
      </div>
      <div className="content-image flex flex-col md:flex-row justify-center gap-8 mt-10 max-w-6xl mx-auto">
        {images.map((image) => (
          <div key={image.id} className="relative text-center group">
            {/* Gambar dan efek hover */}
            <div className="relative w-1/2 md:w-[250px] h-[250px] mx-auto">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-300 group-hover:scale-[1]"
              />
              {/* Overlay dan tombol Instagram */}
              <a
                href={image.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 
                         flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram
                    size={32}
                    className="text-white m-auto hover:text-[#F38181] transition-colors duration-300"
                  />
                  <span className="block text-white mt-2">
                    View Instagram Profile
                  </span>
                </div>
              </a>
            </div>
            {/* Nama dan deskripsi */}
            <div className="mt-4 space-y-2">
              <a
                href={image.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium text-black hover:text-[#F38181] transition-colors duration-300"
              >
                {image.name}
              </a>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderTeam;
