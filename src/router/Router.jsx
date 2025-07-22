import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import HomeLayOuts from "../Layouts/HomeLayOuts";
// import SignUp from "../Pages/register/signUp/SignUp";
import SignIn from "../Pages/register/SignIn/SignIn";
import SignUp from "../Pages/register/signUp/SignUp";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Products from "../Pages/Home/Products/Products";
import ContactUs from "../Pages/contactUs/ContactUs";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PageNotFund from "../Pages/PageNotFund/PageNotFund";
import SingleProduct from "../Pages/singleProduct/SingleProduct";
import BuyItem from "../Pages/buyItems/BuyItem";
import MyOrder from "../Pages/my-order/MyOrder";
import AllBookingData from "../Pages/allBooking/AllBookingData";
import EditMyOrder from "../Pages/editMyOreder/EditMyOrder";

import AllProducts from "../Pages/AllPrtoducts/AllProducts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOuts></HomeLayOuts>,
    errorElement: <PageNotFund />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "aboutUs",
        element: <AboutUs />,
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "buyitem/:id",
        element: (
          <PrivateRoute>
            <BuyItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "singleproduct/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: "/allbooking",
        element: <AllBookingData></AllBookingData>,
      },
      {
        path: "/myorder",
        element: <MyOrder />,
      },
      {
        path: "/update/:id",
        element: <EditMyOrder />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },

      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
