import { Link } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import useAxioasSecure from "../../hooks/useAxioasSecure";

const MyOrder = () => {
  const { user, loading } = useAuth();
  const [oders, setOrders] = useState([]);

  const axiosSecure = useAxioasSecure();

  useEffect(() => {
    // fetch(`http://localhost:5000/user?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data));

    // axios
    //   .get(`http://localhost:5000/user?email=${user?.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setOrders(res.data));

    axiosSecure
      .get(`/user?email=${user?.email}`)
      .then((res) => setOrders(res.data));
  }, [user?.email]);

  const handleDlete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            // remove the coffee from the state
            const remainingOrders = oders.filter((oder) => oder._id !== _id);
            setOrders(remainingOrders);
          });
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
            <p className="uppercase text-6xl">MY-ORDERS</p>
            <Link to="/">
              <p className="uppercase mt-4 text-[#dc5547] tracking-wider font-Cormorant font-bold hover:underline">
                Back home
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        {!loading ? (
          <table className="table text-1xl">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {oders.map((odr) => (
                <tr key={odr._id} odr={odr}>
                  <th>{odr.userName}</th>
                  <th>{odr.user_email}</th>
                  <th>{odr.productName}</th>
                  <th>${odr.price}</th>
                  <th>
                    <Link to={`/update/${odr._id}`}>update</Link>
                  </th>
                  <th>
                    <button onClick={() => handleDlete(odr._id)}>
                      <MdDeleteForever className="text-red-600 text-2xl " />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">
            <span className="loading loading-spinner text-primary "></span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
