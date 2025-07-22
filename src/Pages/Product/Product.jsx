import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, imageUrl, _id } = product;
  return (
    <div>
      <div
        className=" hero h-52"
        style={{
          opacity: "50px",
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="font-semibold font-Cormorant uppercase text-white flex justify-between">
          <Link to={`/singleproduct/${_id}`}>
            <h1> {name}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
