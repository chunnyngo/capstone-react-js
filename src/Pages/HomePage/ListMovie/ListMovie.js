import { useEffect } from "react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFilmAction } from "../../../redux/actions/QuanLiPhimAction";
import MultipleRowSlick from "../../../Components/ReacSlick/MultipleRowSlick";

export default function ListMovie() {
  const { arrFilm } = useSelector((state) => state.QuanLiPhimReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmAction());
  }, [dispatch]);
  //   dependencies

  return (
    <div className=" containerFilm px-2 py-5 mx-auto">
      <MultipleRowSlick arrFilm={arrFilm} />
    </div>
  );
}
