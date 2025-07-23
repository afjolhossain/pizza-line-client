import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/images/splash-header-2.jpg";
import image2 from "../../../assets/images/para03.jpg";
import image3 from "../../../assets/images/para10.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper relative "
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="hero-overlay opacity-44"></div>
            <div className=" text-neutral-content">
              <div className="max-w-2xl mx-auto p-3">
                <div>
                  <h1 className="mb-5 text-7xl space-y-5 font-serif">
                    Amazing Food with Fresh Daily Products & Wine
                  </h1>
                </div>
                <Link to="aboutUs">
                  <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white">
                    more info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div
            className="hero  min-h-screen"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md p-3">
                <h1 className="mb-5 text-7xl font-Cormorant space-y-3">
                  Redefining Excellence
                </h1>
                <p className="mb-5">Elevate Possibilities</p>
                <Link to="aboutUs">
                  <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white">
                    more info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative  ">
          <div
            className=" hero min-h-screen "
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className=" text-neutral-content p-6 ">
              <div className="max-w-md">
                <h1 className="mb-5 text-7xl font-Cormorant">
                  Good Times Great Tastes
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link to="aboutUs">
                  <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white">
                    more info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
