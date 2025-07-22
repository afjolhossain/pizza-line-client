import { Link } from "react-router-dom";
import image1 from "../../assets/images/para10.jpg";
import imageAbout from "../../assets/aboutPage/about.jpg";
import team1 from "../../assets/aboutPage/team-01.jpg";
import team2 from "../../assets/aboutPage/team-02.jpg";
import team3 from "../../assets/aboutPage/team-03.jpg";

const AboutUs = () => {
  return (
    <div>
      <div
        className="hero min-h-96 "
        style={{
          opacity: "20px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md ">
            <p className="uppercase text-6xl ">About us</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] font-Cormorant font-bold tracking-wider hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-base-200 max-w-full ">
        <div className="flex flex-col lg:flex-row-reverse p-6 py-7">
          <div className="flex-1">
            <img src={imageAbout} className="  p-6" />
          </div>
          <div className="flex-1 py-6 space-y-4">
            <h1 className="text-2xl font-bold font-Cormorant uppercase text-[#dc5547]">
              About Our Company
            </h1>
            <h2 className="text-4xl font-Cormorant ">
              Transforming challenges into opportunities and ideas into reality.
            </h2>
            <p className="py-6 leading-6 font-Jost text-1xl">
              Our story is one of dedication, innovation, and a commitment to
              creating positive change in [nicdark_ai_business_name]. From
              humble beginnings to a thriving force, we've remained steadfast in
              our pursuit of excellence.
            </p>
            <Link to="/allproducts">
              <button className="btn btn-primary bg-[#dc5547] border-none">
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-6 space-y-3 max-w-lg text-1xl  mx-auto">
        <h1 className="text-2xl text-[#dc5547] uppercase font-Cormorant ">
          Check now
        </h1>
        <h1 className="text-4xl font-Cormorant">Meet the Team</h1>
        <p className="font-Jost text-gray-800">
          Diverse talents, unified excellence with harmony in expertise, meet
          the minds behind our success
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6">
          <div
            className=" h-96"
            style={{
              backgroundBlendMode: "lighten",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no - repeat",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backgroundImage: `url(${team1})`,
            }}
          ></div>
          <h1 className=" text-2xl font-Jost text-black text-center  ">
            Taylor Jordan
          </h1>
        </div>
        <div>
          <div className="p-6">
            <div
              className=" h-96"
              style={{
                backgroundBlendMode: "lighten",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no - repeat",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                backgroundImage: `url(${team2})`,
              }}
            ></div>
            <h1 className=" text-2xl font-Jost text-black text-center  ">
              Morgan Patel
            </h1>
          </div>
        </div>
        <div>
          <div className="p-6">
            <div
              className=" h-96"
              style={{
                backgroundBlendMode: "lighten",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no - repeat",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                backgroundImage: `url(${team3})`,
              }}
            ></div>
            <h1 className=" text-2xl font-Jost text-center text-black  ">
              Riley Adams
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
