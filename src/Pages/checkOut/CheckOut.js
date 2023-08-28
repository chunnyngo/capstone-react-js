import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CheckOut() {
  let { userLogin } = useSelector((state) => state.quanLiNguoiDungReducer);
  const navigate = useNavigate();
  console.log(userLogin);
  if (!userLogin) {
    return setTimeout(() => {
      navigate("/Login");
    }, 1000);
  }
  return <div>CheckOut</div>;
}
