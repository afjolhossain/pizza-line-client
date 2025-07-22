import { useEffect, useState } from "react";
import Product from "../../Product/Product";
import useAuth from "../../../hooks/useAuth";

const Products = () => {
  const { loading } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-black text-center  py-6">
      <div className="space-y-4">
        <p className="text-[#DD5903] uppercase text-2xl font-normal font-Jost">
          Diverse Solutions Tailored to Your Needs
        </p>
        <h1 className=" text-5xl font-Cormorant text-gray-600">
          Comprehensive Services
        </h1>
        <p className="font-serif p-6">
          A multifaceted array of tailored solutions to address your unique
          requirements and elevate your experience.
        </p>
      </div>

      {!loading ? (
        <div className="grid md:grid-cols-4 gap-4 p-4">
          {products.slice(0, 8).map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </div>
      ) : (
        <p className="text-center">
          <span className="loading loading-spinner w-12 text-center text-error"></span>
        </p>
      )}
    </div>
  );
};

export default Products;
