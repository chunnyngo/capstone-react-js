import React, { useEffect } from "react";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import HomeCarousel from "../../Components/Carousel/HomeCarousel";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLiRapAction";

export default function HomePage(props) {
  const { heThongRap } = useSelector((state) => state.QuanLiRapReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  return (
    <div className="space-y-16">
      <HomeCarousel />
      <ListMovie />
      <TabMovie heThongRap={heThongRap} />
    </div>
  );
}
