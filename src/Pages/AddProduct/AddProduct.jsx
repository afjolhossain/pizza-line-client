import { Link } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const AddProduct = () => {
  const { loading } = useAuth();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const discription = form.discription.value;
    const price = form.price.value;
    const catagory = form.catagory.value;
    const product = { name, imageUrl, discription, price, catagory };

    fetch("https://pizza-line-server.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };

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
            <p className="uppercase text-6xl">Add-product</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto p-4 my-4 rounded bg-black">
        {!loading ? (
          <form onSubmit={handleAddProduct} className="p-4 space-y-4  ">
            <input
              type="text"
              name="name"
              required
              placeholder="Product Name"
              className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
            />
            <input
              type="text"
              name="imageUrl"
              required
              placeholder="image_URL"
              className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
            />
            <input
              type="text"
              name="discription"
              required
              placeholder="Discription"
              className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
            />
            <input
              type="text"
              name="price"
              required
              placeholder="Price"
              className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
            />
            <input
              type="text"
              name="catagory"
              required
              placeholder="Catagory"
              className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
            />
            <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white w-full ">
              Add Product
            </button>
          </form>
        ) : (
          <p className="text-center">
            <span className="loading loading-spinner w-12 mx-auto text-error"></span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
