import React from "react";

const Donut = ({ img, indx }) => {
  return (
    <div className="relative bg-white/50 rounded-3xl px-10 flex flex-col gap-4 items-center w-72 h-72">
      {indx == 3 ? (
        <div className="third h-32 w-32"></div>
      ) : (
        <div>
          <img src={img} alt="Donut" className="h-32 bg-cover bg-center" />
        </div>
      )}
      <div className="space-y-3 text-center">
        <h1 className="font-bold">Donut</h1>
        <p className="text-sm leading-6 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
    </div>
  );
};

export default Donut;
