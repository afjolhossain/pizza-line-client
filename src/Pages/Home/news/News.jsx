import { Link } from "react-router-dom";
import News1 from "../../../assets/news-image/our news-1.jpg";
import News2 from "../../../assets/news-image/our-news-2.jpg";

const News = () => {
  return (
    <div>
      <div className=" min-h-screen p-6">
        <h1 className="text-center text-5xl py-6 text-gray-600">OUR NEWS</h1>
        <div className="hero-content flex-col lg:flex-row">
          <div className=" flex-1">
            <img src={News1} />
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-[#dc5547] text-2xl">News</h1>
            <p className="text-4xl font-bold text-gray-500 font-Cormorant">
              New Appetizers
            </p>
            <p className="text-gray-800 uppercase font-sans font-semibold">
              10 January
            </p>
            <p className="text-gray-500 font-Jost">
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis.
            </p>
            <Link to="aboutUs">
              <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white">
                more info
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 space-y-4">
            <h1 className="text-[#dc5547] text-2xl">News</h1>
            <p className="text-4xl font-bold text-gray-500 font-Cormorant">
              Inauguration
            </p>
            <p className="text-gray-800 uppercase font-sans font-semibold">
              10 January
            </p>
            <p className="text-gray-500 font-Jost">
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci ut et lobortis.
            </p>
            <Link to="aboutUs">
              <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white">
                more info
              </button>
            </Link>
          </div>
          <div className=" flex-1">
            <img src={News2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
