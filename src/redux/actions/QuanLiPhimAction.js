import { https } from "../../Service/config";
import { SET_LIST_FILM } from "../constant/Constant";

export const getFilmAction = () => {
  return (dispatch) => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP08")
      .then((response) => {
        dispatch({
          type: SET_LIST_FILM,
          arrFilm: response.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
