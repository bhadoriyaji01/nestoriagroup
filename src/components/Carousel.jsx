import React from 'react';
import testomonial1 from '/src/assets/img/testomonials/D-P-Kaushik.webp'
import testomonial2 from '/src/assets/img/testomonials/Khargeswar-Brahma.webp'
import testomonial3 from '/src/assets/img/testomonials/Miss.-Arti-Nagpal.webp'
import testomonial4 from '/src/assets/img/testomonials/Mr-CHARANJIT-SINGH.webp'
import testomonial5 from '/src/assets/img/testomonials/Mr-K-C-Anand.webp'
import testomonial6 from '/src/assets/img/testomonials/Mr.-Dayananda-Reddy.webp'
import testomonial7 from '/src/assets/img/testomonials/Shahnawaz-Choudhary.webp'
import testomonial8 from '/src/assets/img/testomonials/Jasbir-Singh-Arora.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const Carousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. D P Kaushik",
      position: "- Manager, Human Resource Deppt, Govt of India",
      // location: "Ahmedabad",
      // category: "commercial",
      rating: 5,
      testimonial: "Hello guys. If you are planning to buy some property, don’t waste your time, just dial Nestoria Group and let them do the rest. You just tell them what you need and sit relaxed. Trust me, you will get the perfect piece of property. I must say, one hundred percent satisfaction.",
      image: testomonial1,
      // date: "December 15, 2023"
    },
    {
      id: 2,
      name: "Mr. Khargeswar Brahma",
      position: "EX. ARMY EME (Junior commissioned officer) Indian ARMY",
      // location: "Gandhinagar",
      // category: "residential",
      rating: 5,
      testimonial: "I would really like to thank the team of Nestoria group for helping me find the best option in Dholera SIR. They understood my requirements and presented me with the best investment option in the Dholera Smart City project. A big thanks to team Nestoria.",
      image: testomonial2,
      // date: "November 5, 2023"
    },
    {
      id: 3,
      name: "Miss. Arti Nagpal",
      position: "Bollywood Actor & Investor",
      // location: "Surat",
      // category: "industrial",
      rating: 4,
      testimonial: "It’s almost Five years since I got a perfect place to my dream home through Nestoria. And I have recommended it to everyone looking for any type of property. Whenever my friends, relatives, or known ones ask me about the property, my call goes to only Nestoria Group. And this confidence comes from the level of satisfaction we had.",
      image: testomonial3,
      // date: "October 20, 2023"
    },
    {
      id: 4,
      name: "Mr. Charanjit Singh",
      position: "(RETD.) Manager, RBI",
      // location: "Mumbai",
      // category: "investment",
      rating: 5,
      testimonial: "Now I am the owner of a fantastic property in Dholera Smart City. To be honest, I spent around seven months deciding that and I was confused about investing in Dholera SIR. But then the Nestoria group came to help and explained everything about the location in a transparent manner with appropriate investment options. It really helped me in the right decision-making. And now, I own some properties in Dholera Smart City.",
      image: testomonial4,
      // date: "September 12, 2023"
    },
    {
      id: 5,
      name: "Mr. K. C. Anand",
      position: "General Manager, (Retd) RBI",
      // location: "Vadodara",
      // category: "residential",
      rating: 5,
      testimonial: "I only explained my requirements and budget to them, and the rest was taken care of by an excellent team of Nestoria. Showcasing only the best possible options really helped me in saving huge time and effort. Really professional.",
      image: testomonial5,
      // date: "August 30, 2023"
    },
    {
      id: 6,
      name: "Mr. Dayananda Reddy",
      position: "MLC Bengaluru & Founder of Dayananda foundation",
      // location: "Ahmedabad",
      // category: "commercial",
      rating: 4,
      testimonial: "It is tedious and demanding to look for the right property while in a job. It needs effort and involves a risk of wrong selection, but Nestoria made it simple for me. It made my experience as cozy as their property.",
      image: testomonial6,
      // date: "July 15, 2023"
    },
    {
      id: 7,
      name: "Mr. Shahnawaz Choudhary",
      position: "Director of Institute of Political Leadership & Political Trainer",
      // location: "Dubai (Originally from Gujarat)",
      // category: "investment",
      rating: 5,
      testimonial: "As an NRI looking to invest in Indian real estate, I needed a trustworthy partner who could handle everything while I was abroad. Nestoria Group managed the entire process seamlessly - from property selection to legal documentation. Their virtual tours and detailed reports helped me make confident decisions without being physically present. The investment has shown good appreciation, and I'm considering additional investments through them.",
      image: testomonial7,
      // date: "June 22, 2023"
    },
    {
      id: 8,
      name: "Dr. Jasbir Singh Arora",
      position: "International Trainer, business coach & Motivational speaker.",
      // location: "Bhavnagar",
      // category: "industrial",
      rating: 5,
      testimonial: "Nestoria Group is more than a real estate company. It’s a solution provider, working hard to provide you with the best options. It was a great experience with Nestoria to own the right property.",
      image: testomonial8,
      // date: "May 10, 2023"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="py-12 relative w-full max-w-[1600px] mx-auto touch-pan-y">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ 
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
          delayAfterEnd: 0
        }}
        loop={true}
        speed={5000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        className="w-full overflow-hidden py-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 h-full border border-gray-100 relative overflow-hidden group hover:border-blue-200 flex flex-col" style={{ height: '450px' }}>
              {/* Decorative Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <i className="fas fa-quote-right text-6xl text-blue-600"></i>
              </div>
              
              {/* Rating Stars */}
              <div className="flex mb-4 flex-shrink-0">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Content */}
              <div className="mb-6 flex-grow overflow-hidden">
                <p className="text-gray-700 text-base leading-relaxed italic relative pl-4 border-l-4 border-blue-600 line-clamp-6">
                  "{testimonial.testimonial}"
                </p>
              </div>
              
              {/* User Info Section */}
              <div className="flex items-center pt-6 border-t border-gray-100 flex-shrink-0 mt-auto">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 shadow-sm">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                </div>
                <div className="ml-4 flex-grow min-w-0">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2" title={testimonial.position}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
              
              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;