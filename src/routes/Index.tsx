  import Login from "../pages/Login";
  import OtpVerification from "../pages/OtpVerification";
  import Home from "../pages/Home";
  import Categories from "../pages/Categories";
  import ProductListing from "../pages/ProductListing";
  import NotFound from "../pages/NotFound";
  import { Routes, Route } from "react-router-dom";

  export default function Index() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:categoryId" element={<ProductListing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
