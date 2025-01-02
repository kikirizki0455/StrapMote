const Location = () => {
  return (
    <div className="w-full  font-primaryFont">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mt-10 font-bold text-center mb-8">
          Our Location
        </h2>
        <div className="border-b-2 border-[#A1D6CB] w-40 m-auto mt-10"></div>
        <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.5243107303995!2d107.7540502575055!3d-6.963357738805148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1735413500589!5m2!1sen!2sid"
            width="100%" // Memastikan lebar iframe 100%
            height="100%" // Memastikan tinggi iframe 100%
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
