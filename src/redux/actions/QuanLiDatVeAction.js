import { https } from "../../Service/config";
import { SET_CHI_TIET_PHONG_VE } from "../constant/Constant";
export const layChiTietPhongVeAction = (maLichChieu) => {
  return (dispatch) => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((res) => {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
