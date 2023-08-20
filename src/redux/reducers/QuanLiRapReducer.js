import { SET_HE_THONG_RAP_CHIEU } from "../constant/Constant";

const stateDefault = {
  heThongRap: [],
};
export const QuanLiRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.heThongRap = action.heThongRap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
