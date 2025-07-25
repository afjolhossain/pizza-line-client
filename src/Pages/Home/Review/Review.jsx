import image1 from "../../../assets/images/splash-header-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import team1 from "../../../assets/aboutPage/team-01.jpg";
import team2 from "../../../assets/aboutPage/team-02.jpg";
import team3 from "../../../assets/aboutPage/team-03.jpg";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Review = () => {
  return (
    <div
      className=" min-h-96  "
      style={{
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="text-white text-center py-4">
        <h1 className="font-Jost text-2xl mt-14">Customer Voices</h1>
        <h2 className="font-Cormorant text-1xl">
          Discover Our Satisfied Customers
        </h2>
      </div>
      <div className="hero-content text-neutral-content text-center mx-auto">
        <Swiper
          autoplay={{
            delay: 3000,
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
          modules={[Navigation, Autoplay]}
          className="mySwiper relative"
        >
          <SwiperSlide>
            <div
              className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row max-w-2xl mx-auto"
              bis_skin_checked="1"
            >
              <img
                src={team1}
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
              />
              <div className="flex flex-col text-start" bis_skin_checked="1">
                <h4 className="text-lg font-semibold">Afjol Hossain</h4>
                <p className="dark:text-gray-600">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row max-w-2xl mx-auto"
              bis_skin_checked="1"
            >
              <img
                src={team2}
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
              />
              <div className="flex flex-col text-start" bis_skin_checked="1">
                <h4 className="text-lg font-semibold">robin hossain</h4>
                <p className="dark:text-gray-600">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row max-w-2xl mx-auto"
              bis_skin_checked="1"
            >
              <img
                src={team3}
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
              />
              <div className="flex flex-col text-start" bis_skin_checked="1">
                <h4 className="text-lg font-semibold">mofiz ali</h4>
                <p className="dark:text-gray-600">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
