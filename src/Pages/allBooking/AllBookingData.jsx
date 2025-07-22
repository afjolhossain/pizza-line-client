import { Link } from "react-router-dom";
import image1 from "../../../src/assets/images/splash-header-2.jpg";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import useAxioasSecure from "../../hooks/useAxioasSecure";
const AllBookingData = () => {
  const { user, loading } = useAuth();
  const [Bookings, setBookings] = useState([]);
  const axiosSecure = useAxioasSecure();
  useEffect(() => {
    // fetch(`http://localhost:5000/booking?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));

    axiosSecure
      .get(`/booking?email=${user?.email}`)
      .then((res) => setBookings(res.data));
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
        fetch(`http://localhost:5000/booking/${_id}`, {
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
            const remainingOrders = Bookings.filter((oder) => oder._id !== _id);
            setBookings(remainingOrders);
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
          <div className="max-w-2xl space-y-3">
            <p className="uppercase text-6xl">ALL-BOOKING-DATE</p>
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
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Guest</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((booking) => (
                <tr className="text-center" booking={booking} key={booking._id}>
                  <th>{booking.user_Name}</th>
                  <th>{booking.user_email}</th>
                  <th>{booking.date}</th>
                  <th>{booking.person}</th>
                  <th>
                    <button onClick={() => handleDlete(booking._id)}>
                      <MdDeleteForever className="text-red-600 text-2xl " />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">
            <span className="loading loading-spinner text-primary"></span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBookingData;
