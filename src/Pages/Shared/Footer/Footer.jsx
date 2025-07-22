import { Link } from "react-router-dom";
import image1 from "../../../assets/images/splash-header-2.jpg";
import logo from "../../../assets/logo/pizza.png";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div
        className=" min-h-72 "
        style={{
          opacity: "20px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center  ">
          <footer className="footer sm:footer-horizontal p-10 ">
            <nav>
              <h1 className=" text-2xl font-medium p-2 font-Cormorant tracking-wider uppercase hover:transition-all ease-in duration-300 ">
                Pizza<span className="text-[#dc5547]">Line</span>
              </h1>
              <img className="w-20 mx-auto" src={logo} alt="" />
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <Link
                className="hover:underline hover:decoration-red-500 decoration-2"
                to="/aboutUs"
              >
                About us
              </Link>
              <Link
                className="hover:underline hover:decoration-red-500 decoration-2"
                to="/contact"
              >
                Contact us
              </Link>
              <Link
                className="hover:underline hover:decoration-red-500 decoration-2"
                to="/allproducts"
              >
                Products
              </Link>
            </nav>
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <div className="w-12 h-10 rounded bg-[#dc5547] hover:bg-black transition ease-out duration-600 ">
                  <CiYoutube className=" text-4xl mx-auto my-auto" />
                </div>
                <div className="w-12 h-10 rounded bg-[#dc5547] hover:bg-black transition ease-out duration-600 ">
                  <CiFacebook className=" text-4xl mx-auto " />
                </div>
                <div className="w-12 h-10 rounded bg-[#dc5547] hover:bg-black transition ease-out duration-600 ">
                  <CiTwitter className=" text-4xl mx-auto " />
                </div>
                <div className="w-12 h-10 rounded bg-[#dc5547] hover:bg-black transition ease-out duration-600 ">
                  <CiInstagram className=" text-4xl mx-auto" />
                </div>
              </div>
            </nav>
          </footer>
        </div>
        <div className="flex items-center justify-center px-6  text-sm">
          <span className="text-gray-400">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
