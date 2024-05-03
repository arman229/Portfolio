import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import certificates from '../data/certificate';
import 'swiper/css';
import 'swiper/css/pagination';
export default function MyCertificate() {

    const gridItemStyle = {
        textAlign: 'center',
        padding: '16px',


    };
    const titleStyle = {
      fontSize: '29px',
      textAlign: 'left',
      borderBottom: '2px solid white',
      paddingBottom: '12px',
  };
  

    const paperStyle = {
        padding :"8px",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

  return (
 
    <div style={{ backgroundColor: '#333', color: '#fff',   }}>      <section style={{
        padding: '32px 0',
        userSelect: "none" }}   sx={{ py: 4,}}>

  

    <h1 style={titleStyle} >
                    Certificates
                </h1>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className={"flex justify-center"}
        breakpoints={{
          992: { slidesPerView: 4 },
          630: { slidesPerView: 3 },
          500: { slidesPerView: 2 },
          400: { slidesPerView: 1 },
        }}
      >
        {certificates.map((certificate, index) => (
          <div>
          <SwiperSlide key={ index} className='' >
             1
             <div style={paperStyle}>
                                    <img src={certificate.image} alt={certificate.title} style={{ maxWidth: '100%' }} />
                                    <h1>
                                        {certificate.title}
                                    </h1>
                                    <h2>
                                        Issued by {certificate.issuer}
                                    </h2>
                                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </div>
            
          </SwiperSlide>
         
          </div>
        ))}


      </Swiper>
      
        </section>
    </div>
  );
}