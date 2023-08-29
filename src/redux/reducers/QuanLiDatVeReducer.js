import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../constant/Constant";
import { ThongTinLichChieu } from "../../_Core/models/ThongTinPhongVe";
const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
};

export const QuanLiDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_VE: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};
