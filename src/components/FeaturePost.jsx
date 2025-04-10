import { Link } from "react-router-dom";
import CloudinaryImage from "../utilities/CloudinaryImage";
import React from "react";

const FeaturePost = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      {/* First Post */}
      <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg lg:w-1/2">
        {/* Image 1*/}
        <CloudinaryImage
          publicId="cld-sample-3.jpg"
          alt={"Sample Image 3"}
          tailwind={"rounded-2xl object-cover h-full w-full"}
        />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/posts?cat=sports" className="text-jean-800 lg:text-lg">
            Sport
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link
          to="/post/1"
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          Basket is Cool!
        </Link>
      </div>
      {/* Top 5 */}
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {/* Second */}
        <div className="flex justify-between gap-4 rounded-3xl bg-white p-4 shadow-lg lg:h-1/4">
          {/* Image 2*/}
          <CloudinaryImage
            publicId="cld-sample.jpg"
            alt={"Sample Image"}
            tailwind={"rounded-2xl object-cover w-1/2 aspect-video"}
          />
          {/* Details & Title*/}
          <div className="w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link to="/posts?cat=jean" className="text-jean-800">
                Jean
              </Link>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/2"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              I Love Dogs &#128154;
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="flex justify-between gap-4 rounded-3xl bg-white p-4 shadow-lg lg:h-1/4">
          {/* Image 3*/}
          <CloudinaryImage
            publicId="cld-sample-5.jpg"
            alt={"Sample Image 5"}
            tailwind={"rounded-2xl object-cover w-1/2 aspect-video"}
          />
          {/* Details & Title*/}
          <div className="w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link to="/posts?cat=music" className="text-jean-800">
                Music
              </Link>
              <span className="text-sm text-gray-500">4 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/2"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Put My Sneakers ON &#127925; Itzy - Sneakers Review
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="flex justify-between gap-4 rounded-3xl bg-white p-4 shadow-lg lg:h-1/4">
          {/* Image 4*/}
          <CloudinaryImage
            publicId="cld-sample-4.jpg"
            alt={"Sample Image 4"}
            tailwind={"rounded-2xl object-cover w-1/2 aspect-video"}
          />
          {/* Details & Title*/}
          <div className="w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">04.</h1>
              <Link to="/posts?cat=food" className="text-jean-800">
                Food
              </Link>
              <span className="text-sm text-gray-500">5 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/4"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Breakfast is the most important meal of the day
            </Link>
          </div>
        </div>
        {/* Fifth */}
        <div className="flex justify-between gap-4 rounded-3xl bg-white p-4 shadow-lg lg:h-1/4">
          {/* Image 2*/}
          <iframe
            className="aspect-video w-1/2 rounded-2xl object-cover"
            src="https://www.youtube.com/embed/4QpFnSsp4gU?si=k-brZvK24VbUPDNL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen="true"
          ></iframe>
          {/* Details & Title*/}
          <div className="w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">05.</h1>
              <Link to="/posts?cat=games" className="text-jean-800">
                Games
              </Link>
              <span className="text-sm text-gray-500">6 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/5"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Foggedftw Tryndamere Guide Hail of Blades
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
