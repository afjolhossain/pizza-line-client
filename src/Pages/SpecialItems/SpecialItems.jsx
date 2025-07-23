import { useEffect } from "react";
import item1 from "../../assets/special_tems/sm-01.jpg";
import item2 from "../../assets/special_tems/sm-02.jpg";
import item3 from "../../assets/special_tems/sm-03.jpg";
import item4 from "../../assets/special_tems/sm-04.jpg";
import item5 from "../../assets/special_tems/sm-05.jpg";
import item6 from "../../assets/special_tems/sm-06.jpg";
import item7 from "../../assets/special_tems/sm-07.jpg";
import item8 from "../../assets/special_tems/sm-08.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const SpecialItems = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="py-6">
      <h1 className="text-5xl text-center font-Cormorant mt-10  text-gray-600">
        SPECIALITIES
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-6">
        <div data-aos="fade-up-right" data-aos-delay="200">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item1} />
              </div>
              <div className="list-col-grow my-auto items-center">
                <p className="text-xl uppercase font-semibold opacity-60">
                  PASTA WITH FISH
                </p>

                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-xl font-semibold text-end text-gray-600">
                  $39
                </p>
                <button className="bg-[#3b9a45] h-6 font-semibold rounded w-20 text-white">
                  STARTER
                </button>
              </div>
            </li>
          </ul>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item2} />
              </div>
              <div className="list-col-grow my-auto items-center">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  FRESH MEAT
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $26
                </p>
                <button className="btn h-6 w-20 text-black">NEW</button>
              </div>
            </li>
          </ul>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item3} />
              </div>
              <div className="list-col-grow my-auto items-center">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  SPAGHETTI
                </h3>
                <p className="text-lg text-gray-500">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg text-gray-600 text-end font-semibold">
                  $15
                </p>
                <button className="bg-[#3b9a45] w-20 rounded h-6 text-white">
                  NEW
                </button>
              </div>
            </li>
          </ul>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item4} />
              </div>
              <div className="list-col-grow my-auto items-center">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  CHICKEN
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $19
                </p>
                <button className="bg-[#3b9a45] w-20 h-6  rounded text-white">
                  NEW
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="200">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item5} />
              </div>
              <div className="list-col-grow my-auto space-y-2">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  NOODLES
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $22
                </p>
                <button className="bg-[#bd4141] w-20 h-6 rounded text-white">
                  NEW
                </button>
              </div>
            </li>
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item6} />
              </div>
              <div className="list-col-grow my-auto space-y-2">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  CHICKEN
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $28
                </p>
                <button className="bg-[#3b9a45] w-20 h-6 rounded text-white">
                  NEW
                </button>
              </div>
            </li>
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item7} />
              </div>
              <div className="list-col-grow my-auto space-y-2">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  VEGETARIAN FRIED
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $33
                </p>
                <button className="bg-[#3b9a45] w-20 h-6 rounded text-white">
                  GLUTAN FREE
                </button>
              </div>
            </li>
            <li className="list-row">
              <div>
                <img className="size-24 rounded-box" src={item8} />
              </div>
              <div className="list-col-grow my-auto space-y-2">
                <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                  VEGETARIAN FRIED
                </h3>
                <p className="text-lg dark:text-gray-600">
                  Lorem ipsum dolor sit amt
                </p>
              </div>
              <div className="my-auto space-y-2">
                <p className="text-lg font-semibold text-end text-gray-600">
                  $71
                </p>
                <button className=" btn text-black w-20 h-6 rounded ">
                  FISH
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialItems;
