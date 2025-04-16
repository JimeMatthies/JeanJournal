import React from "react";

const Title = ({ title }) => {
  return (
    <div className="title mx-auto mt-8 max-w-3xl text-center">
      <h1 className="relative mb-2 pb-4 text-4xl leading-tight font-bold text-gray-900">
        <span className="from-jean-600 to-star-600 bg-gradient-to-r bg-clip-text text-transparent">
          {title}
        </span>
        <span className="to-star-600 from-jean-600 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r"></span>
      </h1>
    </div>
  );
};

export default Title;
