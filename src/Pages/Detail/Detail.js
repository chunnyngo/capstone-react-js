import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import moment from "moment/moment";
import { Tabs, Space, Rate, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLiRapAction";
const { TabPane } = Tabs;

export default function Detail() {
  const { filmDetail } = useSelector((state) => state.QuanLiPhimReducer);
  const dispatch = useDispatch();
  console.log({ filmDetail });
  // userParams() => lấy url hiện tại của browser
  let { id } = useParams();
  useEffect(() => {
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  return (
    <div>
      <div
        className="bg-indigo-300"
        style={{
          // backgroundImage: `url(${movie.hinhAnh})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
          <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-4">
              <div className="grid grid-cols-2">
                <img
                  src={filmDetail.hinhAnh}
                  alt="thumb"
                  style={{
                    width: 300,
                    height: 400,
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
                <div className="pl-5" style={{ marginTop: "60%" }}>
                  <div className="inline-block bg-violet-400 p-2 mb-3 text-white font-bold rounded-lg">
                    Ngày Khởi Chiếu:
                    {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                  </div>
                  <h1 className="text-5xl font-bold text-white ">
                    {filmDetail.tenPhim}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-20 ">
              <Space wrap>
                <Progress
                  type="circle"
                  percent={filmDetail.danhGia * 10}
                  strokeColor={"#a78bfa"}
                  status="active"
                  size={250}
                  trailColor="white"
                />
                <div className="pl-14">
                  <Rate value={filmDetail.danhGia / 2} allowClear={false} />
                </div>
              </Space>
            </div>
          </div>
          <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                <div>
                  <Tabs tabPosition={"left"}>
                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                      return (
                        <TabPane
                          tab={
                            <div className="flex flex-row items-center justify-center">
                              <img
                                src={htr.logo}
                                className="rounded-full w-full"
                                style={{ width: 50 }}
                                alt="..."
                              />
                              <div className="text-center ml-2">
                                {htr.tenHeThongRap}
                              </div>
                            </div>
                          }
                          key={index}
                        >
                          {htr.cumRapChieu?.map((cumRap, index) => {
                            return (
                              <div className="mt-5" key={index}>
                                <div className="flex flex-row">
                                  <img
                                    style={{ width: 60, height: 60 }}
                                    src={cumRap.hinhAnh}
                                    alt="..."
                                  />
                                  <div className="ml-2">
                                    <p
                                      style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        lineHeight: 1,
                                      }}
                                    >
                                      {cumRap.tenCumRap}
                                    </p>
                                    <p
                                      className="text-gray-400"
                                      style={{ marginTop: 0 }}
                                    >
                                      {cumRap.diaChi}
                                    </p>
                                  </div>
                                </div>
                                <div className="thong-tin-lich-chieu grid grid-cols-4">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to={`/Checkout/${lichChieu.maLichChieu}`}
                                          key={index}
                                          className="col-span-1 text-violet-600 font-bold"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          })}
                        </TabPane>
                      );
                    })}
                  </Tabs>
                </div>
              </TabPane>
              <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
                {filmDetail.moTa}
              </TabPane>
              <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
                Đánh giá
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
