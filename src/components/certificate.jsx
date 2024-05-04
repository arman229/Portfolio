import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import certificates from "../data/certificate";
import "swiper/css";
import "swiper/css/pagination";
export default function MyCertificate() {
  
  

  const paperStyle = {
    padding: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        freeMode={true}
      
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode,Pagination,   Navigation]}
        pagination={{ clickable: true,  className:'text-red-900, text-blue-200 my-4'  }}
        className={"flex justify-center"}
        breakpoints={{
           1500: { slidesPerView: 3 },
          700: { slidesPerView: 2 },
          // 500: { slidesPerView: 2 },
          400: { slidesPerView: 1 },
        }}
      >
        {certificates.map((certificate, index) => (
          <div>
            <SwiperSlide key={index} className="">
              <div style={paperStyle}>
                <img className=' transition-all duration-1000   hover:scale-110 cursor-pointer'
                  src={certificate.image}
                  alt={certificate.title}
                  style={{ maxWidth: "100%" }}
                />
                <h1 className="text-lg sm:text-xl font-bold my-2 text-center">{certificate.title}</h1>
<h2 className="text-lg font-semibold mb-2 text-center">Issued by {certificate.issuer}</h2>
<div className="flex justify-center"><a href={certificate.link} target="_blank"   className="text-center  inline pb-5  text-blue-500 hover:underline block cursor-pointer">View Certificate</a>
</div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
