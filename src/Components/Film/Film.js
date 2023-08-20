import React from "react";

export default function Film(props) {
  return (
    <div className="mr-4 mb-4 h-400 bg-gray-100 bg-opacity-75 px-10 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${props.item.item.hinhAnh})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <img
          src={props.item.item.hinhAnh}
          alt={props.item.item.tenPhim}
          className="opacity-0 w-full"
          style={{ height: "400px" }}
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mt-2 h-16">
        {props.item.item.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-16">
        {props.item.item.moTa.length > 100 ? (
          <span>{props.item.item.moTa.slice(0, 60)} ...</span>
        ) : (
          <span>{props.item.item.moTa}</span>
        )}
      </p>
      <a className="text-indigo-500 inline-flex items-center" href="/">
        ĐẶT VÉ
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
