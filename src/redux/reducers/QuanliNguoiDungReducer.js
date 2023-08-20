import { localServ } from "../../Service/LocalStore";
import { SET_LOGIN } from "../constant/Constant";

const stateDefault = {
  userLogin: localServ.getUser(),
};
export const quanLiNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      state.userLogin = action.thongTinDangNhap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
