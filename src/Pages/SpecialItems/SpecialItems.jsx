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
    <div>
      <h1 className="text-5xl text-center font-Cormorant mt-10  text-gray-600">
        SPECIALITIES
      </h1>
      <div className="grid md:grid-cols-2">
        <div data-aos="fade-up-right" data-aos-delay="200">
          <div className="flex flex-col max-w-3xl px-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <ul className="flex flex-col divide-y dark:divide-gray-300">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover  dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item1}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          PASTA WITH FISH
                        </h3>
                        <p className="text-lg dark:text-gray-600">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $39
                        </p>
                        <button className="bg-[#3b9a45] h-6 font-semibold rounded w-20 text-white">
                          STARTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item2}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          FRESH MEAT
                        </h3>
                        <p className="text-lg dark:text-gray-600">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $26
                        </p>
                        <button className="btn h-6 w-12 text-black">NEW</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover  dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item3}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          SPAGHETTI
                        </h3>
                        <p className="text-lg text-gray-500">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg text-gray-600 font-semibold">
                          $15
                        </p>
                        <button className="bg-[#3b9a45] w-12 rounded h-6 text-white">
                          NEW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item4}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          SALMON PASTA
                        </h3>
                        <p className="text-lg text-gray-500">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $18
                        </p>
                        <button className="w-16  h-6 btn bg-[#bd4141] text-white">
                          VEGAN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="200">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <ul className="flex flex-col divide-y dark:divide-gray-300">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover  dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item5}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          NOODLES
                        </h3>
                        <p className="text-lg dark:text-gray-600">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $22
                        </p>
                        <button className="bg-[#bd4141] w-12 h-6 rounded text-white">
                          NEW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item6}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          CHICKEN
                        </h3>
                        <p className="text-lg dark:text-gray-600">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $19
                        </p>
                        <button className="bg-[#3b9a45] w-12 h-6  rounded text-white">
                          NEW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover  dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item7}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          VEGETARIAN FRIED
                        </h3>
                        <p className="text-lg text-gray-500">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg text-gray-600 font-semibold">
                          $15
                        </p>
                        <button className="bg-[#3b9a45] h-6  rounded w-28 text-white">
                          GLUTAN FREE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover dark:border- rounded outline-none md:w-24 md:h-24 sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item8}
                  />
                  <div className="flex  justify-between  w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-2">
                        <h3 className="text-xl text-gray-500 font-semibold leading-snug sm:pr-8">
                          SALMON PASTA
                        </h3>
                        <p className="text-lg text-gray-500">
                          Lorem ipsum dolor sit amt
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-gray-600">
                          $18
                        </p>
                        <button className="w-12 h-6 rounded btn   text-black">
                          FISH
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialItems;
