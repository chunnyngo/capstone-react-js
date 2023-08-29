import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLiPhimReducer } from "./reducers/QuanLiPhimReducer";
import { QuanLiRapReducer } from "./reducers/QuanLiRapReducer";
import { quanLiNguoiDungReducer } from "./reducers/QuanliNguoiDungReducer";
import { QuanLiDatVeReducer } from "./reducers/QuanLiDatVeReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  QuanLiPhimReducer,
  QuanLiRapReducer,
  quanLiNguoiDungReducer,
  QuanLiDatVeReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
