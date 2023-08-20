import { localServ } from "../../Service/LocalStore";
import { https } from "../../Service/config";
import { SET_LOGIN } from "../constant/Constant";

import Swal from "sweetalert2";
export const dangNhapAction = (values) => {
  return (dispatch) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((response) => {
        dispatch({
          type: SET_LOGIN,
          thongTinDangNhap: response.data.content,
        });
        localServ.setUser(response.data.content);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.content,
        });
      });
  };
};
