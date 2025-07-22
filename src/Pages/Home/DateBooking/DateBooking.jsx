import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
const DateBooking = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.Selecteddate.value;
    const person = form.person.value;
    const user_email = user?.email;
    const user_Name = user?.displayName;

    const bookingDateAndPerson = { date, person, user_email, user_Name };

    fetch("https://pizza-line-server.vercel.app/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingDateAndPerson),
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
    <div
      data-aos="zoom-in-left"
      className="  max-w-3xl mx-auto text-center mt-4  py-8"
    >
      <form onSubmit={handleBooking}>
        <div className=" md:flex justify-between items-center gap-3 p-8 rounded bg-[#000] ">
          <div className="space-y-3 flex-1 ">
            <legend className="text-white uppercase">Select a date :</legend>
            <div className="relative ">
              <DatePicker
                name="Selecteddate"
                required
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd MMM yyyy"
                withPortal
                portalId="root-portal"
                className="text-xl w-full m-auto h-12 pl-12 pr-4 py-2 border rounded"
                placeholderText="Select date"
              />
              <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <legend className="text-white">GUESTS :</legend>
            <input
              type="number"
              name="person"
              className="input validator text-3xl w-full  h-12 p-4 text-center"
              required
              defaultValue={1}
              min="1"
              max="20"
            />
          </div>

          <button
            type="submit"
            className=" btn w-full uppercase text-white border-none bg-[#dc5547] h-12 mt-8 flex-1"
          >
            Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default DateBooking;
