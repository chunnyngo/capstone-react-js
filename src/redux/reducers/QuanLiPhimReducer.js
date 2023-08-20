import { SET_FILM_DC, SET_FILM_SC, SET_LIST_FILM } from "../constant/Constant";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 12690,
      tenPhim: "Alchemy of Soul",
      biDanh: "alchemy-of-soul",
      trailer: "https://www.youtube.com/watch?v=H6J3fmL6Bm8",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/alchemy-of-souls_gp01.jpg",
      moTa: 'Set in a fictional country called Daeho, it is about the love and growth of young mages as they overcome their twisted fates due to a forbidden magic spell known as the "alchemy of souls", which allows souls to switch bodies.',
      maNhom: "GP01",
      ngayKhoiChieu: "2023-08-02T00:00:00",
      danhGia: 8,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  dangChieu: false,
  sapChieu: false,
  arrFilmDefault: [],
  filmDetail: {},
  thongTinPhim: {},
};
export const QuanLiPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_FILM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_FILM_DC: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SC: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    default:
      return { ...state };
  }
};
