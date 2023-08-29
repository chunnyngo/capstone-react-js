import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Checkout.module.css";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLiDatVeAction";
import "./Checkout.css";
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  SmileOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { DAT_VE } from "../../redux/constant/Constant";

export default function CheckOut() {
  let { userLogin } = useSelector((state) => state.quanLiNguoiDungReducer);
  let { chiTietPhongVe } = useSelector((state) => state.QuanLiDatVeReducer);

  const dispatch = useDispatch();
  console.log("chitiet", chiTietPhongVe);
  const navigate = useNavigate();

  let { id } = useParams();

  if (!userLogin) {
    return setTimeout(() => {
      navigate("/Login");
    }, 500);
  }
  useEffect(() => {
    dispatch(layChiTietPhongVeAction(id));
  }, []);

  let { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      return (
        <Fragment>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat}`}
          >
            {ghe.daDat ? <CloseOutlined className="pb-1" /> : ghe.stt}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className=" min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
            <div className="p-3">{renderSeats()}</div>
          </div>
        </div>
        <div className="col-span-3 p-2 h-full">
          <h3 className="text-center text-2xl text-violet-600 my-4 font-bold">
            0
          </h3>
          <hr />
          <h3 className="text-xl mt-5 font-bold">{thongTinPhim.tenPhim}</h3>
          <p className="my-3">
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.diaChi}
          </p>
          <p className="mb-5">
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="flex justify-between my-5">
            <div className=" font-bold text-red-700">
              <span>Ghế</span>
            </div>
            <div>0</div>
          </div>
          <hr />
          <div className="my-5">
            <span>Email</span> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <span>Phone</span> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0   items-center">
            <div
              //   onClick={() => {
              //     const thongTinDatVe = new ThongTinDatVe();
              //     thongTinDatVe.maLichChieu = props.match.params.id;
              //     thongTinDatVe.danhSachVe = danhSachGheDangDat;

              //     console.log(thongTinDatVe);

              //     dispatch(datVeAction(thongTinDatVe));
              //   }}
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer  "
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
