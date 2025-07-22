import { Link } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import contactIMG from "../../../src/assets/contact/contactUs.jpg";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const ContactUs = () => {
  const { user, loading } = useAuth();
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const custimerMessage = form.custimerMessage.value;

    const contacInfo = {
      firstName,
      lastName,
      email,
      custimerMessage,
    };
    console.log(contacInfo);

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(contacInfo),
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
        className="hero min-h-96 "
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
            <p className="uppercase text-6xl  ">Contact-us</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-6 space-y-4">
        <p className="text-2xl font-bold font-Cormorant uppercase text-[#dc5547]">
          Direct communication
        </p>
        <h1 className="text-4xl font-Cormorant">Connect with Us</h1>
      </div>
      <div className="  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <img src={contactIMG} className=" " />
          </div>
          <div className="flex-1 bg-black">
            <form onSubmit={handleContact} className="space-y-4 p-5">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Name"
                  className=" w-full border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white"
                />
                <input
                  type="text"
                  required
                  name="lastName"
                  placeholder="Surname"
                  className="w-full border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white"
                />
              </div>
              <input
                type="Email"
                placeholder="Email"
                name="email"
                defaultValue={user?.email}
                className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white w-full"
              />
              <textarea
                placeholder="Message"
                required
                name="custimerMessage"
                className="border border-white bg-transparent text-white px-4 py-2 rounded outline-none focus:border-white h-48 w-full"
              ></textarea>
              <button className="btn btn-primary w-full font-bold font-Jost bg-[#dc5547] border-none">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
