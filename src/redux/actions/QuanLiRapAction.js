import { https } from "../../Service/config";
import { SET_HE_THONG_RAP_CHIEU } from "../constant/Constant";

export const layDanhSachHeThongRapAction = () => {
  return (dispatch) => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08")
      .then((res) => {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRap: res.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
