import SpecialItems from "../SpecialItems/SpecialItems";
import Banner from "./Banner/Banner";
import DateBooking from "./DateBooking/DateBooking";
import News from "./news/News";
import Products from "./Products/Products";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="max-w-7xl">
      <Banner />
      <DateBooking />
      <Products />
      <SpecialItems />
      <Review />
      <News></News>
    </div>
  );
};

export default Home;
