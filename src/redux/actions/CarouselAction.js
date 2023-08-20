import { https } from "../../Service/config";
import { SET_CAROUSEL } from "../constant/Constant";
export const getCarouselAction = () => {
  return (dispatch) => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((response) => {
        dispatch({
          type: SET_CAROUSEL,
          arrImg: response.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
