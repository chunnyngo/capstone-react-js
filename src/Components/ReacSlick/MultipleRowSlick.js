import React from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import styleSlick from "./MultipleRow.module.css";
import FilmFlip from "../Film/Film_Flip";
import { SET_FILM_DC, SET_FILM_SC } from "../../redux/constant/Constant";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLiPhimReducer
  );
  let renderMovieList = () => {
    return props.arrFilm.map((item, index) => {
      return (
        <div className="mt-1" key={index}>
          <FilmFlip key={index} item={{ item }} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-100 text-gray-900`}
        type="button"
        onClick={() => {
          const action = { type: SET_FILM_DC };
          dispatch(action);
        }}
      >
        Đang Chiếu
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400">
          New
        </span>
      </button>
      <button
        type="button"
        className={`${styleSlick[activeClassSC]} relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-100 text-gray-900`}
        onClick={() => {
          const action = { type: SET_FILM_SC };
          dispatch(action);
        }}
      >
        Sắp Chiếu
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-red-400">
          Pre
        </span>
      </button>
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
