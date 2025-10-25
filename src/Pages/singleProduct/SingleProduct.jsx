import { Link, useLoaderData } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";

const SingleProduct = () => {
  const singleProduct = useLoaderData();

  const { name, catagory, discription, imageUrl, price, _id } = singleProduct;

  const handleReviws = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewField = form.reviewField.value;
    const rviews = { reviewField };
    fetch("https://pizza-line-server.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(rviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Food has been saved",
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
            <p className="uppercase text-6xl">Product</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className=" p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-6">
            <img src={imageUrl} className="h-[600px]" />
          </div>
          <div className="flex-1 p-6 space-y-4">
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="text-5xl">${price}</h1>
            <p className="py-6">{discription}</p>

            <Link to={`/buyitem/${_id}`}>
              <button className="btn btn-primary w-full bg-[#DD5903] border-none">
                buy
              </button>
            </Link>
            <p>
              <span className="font-bold">Category</span> {catagory}
            </p>

            <div>
              <Tabs>
                <TabList>
                  <Tab>DISCRIPTION</Tab>
                  <Tab>REVIEWS</Tab>
                </TabList>

                <TabPanel>{discription}</TabPanel>
                <TabPanel>
                  <form onSubmit={handleReviws}>
                    <textarea
                      name="reviewField"
                      required
                      placeholder="Give Your Opinion"
                      className="textarea textarea-primary w-full"
                    ></textarea>
                    <button className="btn mt-4 btn-primary w-full bg-[#DD5903] border-none">
                      buy
                    </button>
                  </form>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
