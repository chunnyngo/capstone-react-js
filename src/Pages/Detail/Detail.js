import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../Service/config";

import { Tabs, Space, Rate, Progress } from "antd";

const onChange = (key) => {
  console.log(key);
};

export default function Detail() {
  const [movie, setMovie] = useState({});
  // userParams() => lấy url hiện tại của browser
  let { id } = useParams();
  useEffect(() => {
    console.log(id);
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const items = [
    {
      key: "1",
      label: <h1 className="text-white font-bold text-2xl">Thông Tin</h1>,
      children: `${movie.moTa}`,
    },
  ];
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
                  src={movie.hinhAnh}
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
                    Ngày Khởi Chiếu: {movie.ngayKhoiChieu}
                  </div>
                  <h1 className="text-5xl font-bold text-white ">
                    {movie.tenPhim}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-20 ">
              <Space wrap>
                <Progress
                  type="circle"
                  percent={movie.danhGia * 10}
                  strokeColor={"#a78bfa"}
                  status="active"
                  size={250}
                  trailColor="white"
                />
                <div className="pl-14">
                  <Rate value={movie.danhGia / 2} allowClear={false} />
                </div>
              </Space>
            </div>
          </div>
          <div className="containerFilm ">
            <Tabs
              items={items}
              onChange={onChange}
              className="text-white text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
