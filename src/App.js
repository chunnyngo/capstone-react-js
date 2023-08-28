import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import HomeLayout from "./Pages/HomePage/HomeLayout/HomeLayout";
import Contact from "./Pages/contact/Contact";
import News from "./Pages/news/News";
import Detail from "./Pages/Detail/Detail";
import CheckOut from "./Pages/checkOut/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout contentPage={<HomePage />} />} />
        <Route
          path="/Home"
          element={<HomeLayout contentPage={<HomePage />} />}
        />
        <Route
          path="/Contact"
          element={<HomeLayout contentPage={<Contact />} />}
        />
        <Route path="/News" element={<HomeLayout contentPage={<News />} />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route
          path="/Detail/:id"
          element={<HomeLayout contentPage={<Detail />} />}
        />
        <Route path="/Checkout/:id" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
