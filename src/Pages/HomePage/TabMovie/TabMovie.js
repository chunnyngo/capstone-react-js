import React from "react";
import moment from "moment/moment";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

export default function TabMovie(props) {
  let { heThongRap } = props;

  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="p-5 flex space-x-5" key={index}>
          <img
            src={phim.hinhAnh}
            className="w-32 h-40 object-cover block flex-shrink-0"
            alt=""
          />
          <div className="grid grid-cols-4 w-full gap-5">
            {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu, index) => {
              // moment js
              return (
                <div
                  className="bg-violet-400 text-white rounded h-10 leading-10 text-center"
                  key={index}
                >
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "DD/MM/YYYY  -- hh:mm"
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      return {
        key: index,
        label: <img className="w-20" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={heThong.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: (
                  <div className="text-left w-80 whitespace-normal ">
                    <p className="text-green-600 font-bold ">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </div>
                ),
                children: renderDsPhim(cumRap.danhSachPhim),
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <div className="container pb-96 mt-16">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
