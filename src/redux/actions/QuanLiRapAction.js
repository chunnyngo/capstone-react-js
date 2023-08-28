import { https } from "../../Service/config";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "../constant/Constant";

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
export const layThongTinChiTietPhimAction = (id) => {
  return (dispatch) => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((res) => {
        dispatch({
          type: SET_CHI_TIET_PHIM,
          filmDetail: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
