import React from "react";
import { useSelector } from "react-redux";
import { localServ } from "../../Service/LocalStore";
import { NavLink, useNavigate } from "react-router-dom";

export default function UserNav() {
  let { userLogin } = useSelector((state) => state.quanLiNguoiDungReducer);
  console.log(userLogin);
  let navigate = useNavigate();

  let handleLogout = () => {
    localServ.removeUser(userLogin);
    window.location.reload();
  };
  let renderContent = () => {
    if (userLogin) {
      // đã đăng nhập
      return (
        <div>
          <header className="p-4 bg-gray-800 bg-opacity-40 dark:text-gray-10 fixed w-full z-50">
            <div className="container flex justify-between h-16 mx-auto">
              <a
                rel="noopener noreferrer"
                href="/"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <h1 className="text-white font-bold text-xl">CYBERFLIX</h1>
              </a>
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/Home"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/Contact"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/News"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    News
                  </NavLink>
                </li>
              </ul>
              <div className="items-center flex-shrink-0 hidden lg:flex text-white">
                <div className="p-3">{userLogin.hoTen}</div>
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
                >
                  Đăng Xuất
                </button>
              </div>
              <button className="p-4 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="p-4 bg-gray-800 bg-opacity-40 dark:text-gray-10 fixed w-full z-50">
            <div className="container flex justify-between h-16 mx-auto">
              <a
                rel="noopener noreferrer"
                href="/"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <h1 className="text-white font-bold text-xl">CYBERFLIX</h1>
              </a>
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/Home"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/Contact"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    rel="noopener noreferrer"
                    to="/News"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  >
                    News
                  </NavLink>
                </li>
              </ul>
              <div className="items-center flex-shrink-0 hidden lg:flex text-white">
                <button
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/Login");
                    }, 1000);
                  }}
                  className="self-center px-8 py-3 rounded"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/Register");
                    }, 1000);
                  }}
                  className="self-center px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900"
                >
                  Sign up
                </button>
              </div>
              <button className="p-4 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
        </div>
      );
    }
  };

  return <div className="flex items-center space-x-5">{renderContent()}</div>;
}
