import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const BuyItem = () => {
  const { user, loading } = useAuth();
  const singleProduct = useLoaderData();

  const { name, catagory, price } = singleProduct;
  const navigate = useNavigate();
  const handleBuyProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    // const email = form.email.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const catagory = form.catagory.value;
    const user_email = user?.email;

    console.log(productName);
    const product = {
      userName,
      productName,
      price,
      catagory,
      user_email,
    };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your product has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myorder");
        }
      });
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
            <p className="uppercase text-6xl">Buy-PIZZA</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>
      {!loading ? (
        <form
          onSubmit={handleBuyProduct}
          className="p-4 space-y-4 max-w-lg mx-auto mt-4 bg-black mb-4 "
        >
          <input
            type="text"
            name="userName"
            required
            defaultValue={user?.displayName}
            placeholder="Product Name"
            className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
          />
          <input
            type="email"
            name="email"
            required
            defaultValue={user?.email}
            className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
          />
          <input
            type="text"
            name="productName"
            required
            defaultValue={name}
            className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
          />

          <input
            type="text"
            name="price"
            required
            defaultValue={price}
            className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
          />
          <input
            type="text"
            name="catagory"
            required
            defaultValue={catagory}
            className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
          />
          <div className="mt-4">
            <button className="btn btn-primary uppercase bg-[#dc5547] border-none text-white w-full ">
              Order Now
            </button>
          </div>
        </form>
      ) : (
        <p className="text-center">
          <span className="loading loading-spinner w-12 mx-auto text-error"></span>
        </p>
      )}
    </div>
  );
};

export default BuyItem;
