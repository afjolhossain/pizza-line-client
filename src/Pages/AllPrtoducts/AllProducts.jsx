import { Link } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import useAuth from "../../hooks/useAuth";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { loading } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-96"
        style={{
          opacity: "20px",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center  ">
          <div className="max-w-md space-y-3">
            <p className="uppercase text-6xl">ALL-PRODUCTS</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center space-y-5 px-6">
        <p className="text-[#DD5903] uppercase text-1xl mt-4 font-normal font-Jost">
          Diverse Solutions Tailored to Your Needs
        </p>
        <h1 className=" text-4xl font-Cormorant">Comprehensive Services</h1>
        <p className="font-serif">
          A multifaceted array of tailored solutions to address your unique
          requirements and elevate your experience.
        </p>
        {!loading ? (
          <div className="grid md:grid-cols-4 gap-4 p-4 ">
            {products.map((product) => (
              <AllProduct product={product} key={product._id}></AllProduct>
            ))}
          </div>
        ) : (
          <span className="loading loading-spinner w-12 text-center text-error"></span>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
