import React from "react";
import CloudinaryImage from "../utilities/CloudinaryImage";
import { Link } from "react-router-dom";

//Props: link, imgId, imgAlt, title, author, category, date, description

const TopFive = () => {
  return (
    <section id="topFive" className="mt-8 flex flex-col gap-4 lg:flex-row">
      {/* Top 1 */}
      <article
        id="topOne"
        className="flex w-full flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg lg:w-1/2"
      >
        {/* Image 1*/}
        <Link to="/post/1" className="h-full w-full">
          <CloudinaryImage
            publicId="cld-sample-3.jpg"
            alt={"Sample Image 3"}
            width={"924"}
            height={"924"}
            tailwind={"rounded-2xl object-cover h-full w-full"}
          />
        </Link>
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/posts?cat=sports" className="text-jean-800 lg:text-lg">
            Sport
          </Link>
          <span className="text-gray-500">1 days ago</span>
        </div>
        {/* Title */}
        <Link
          to="/post/1"
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          Basket is Cool!
        </Link>
      </article>
      {/* Top 5 */}
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        {/* Top 2 */}
        <article
          id="topTwo"
          className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:flex-row lg:h-1/4"
        >
          {/* Image 2*/}
          <Link to={"/post/2"} className="w-full md:w-1/2">
            <CloudinaryImage
              publicId="cld-sample.jpg"
              alt={"Sample Image"}
              width={"462"}
              height={"462"}
              tailwind={"rounded-2xl object-cover aspect-video h-full w-full"}
            />
          </Link>
          {/* Content */}
          <div className="w-full md:w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link to="/posts?cat=jean" className="text-jean-800">
                Jean
              </Link>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/2"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              I Love Dogs &#128154;
            </Link>
          </div>
        </article>
        {/* Top 3 */}
        <article
          id="topThree"
          className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:flex-row lg:h-1/4"
        >
          {/* Image 3*/}
          <Link to={"/post/3"} className="w-full md:w-1/2">
            <CloudinaryImage
              publicId="cld-sample-5.jpg"
              alt={"Sample Image 5"}
              width={"462"}
              height={"462"}
              tailwind={"rounded-2xl object-cover aspect-video h-full w-full"}
            />
          </Link>
          {/* Content */}
          <div className="w-full md:w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link to="/posts?cat=music" className="text-jean-800">
                Music
              </Link>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/3"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Put My Sneakers ON &#127925; Itzy - Sneakers Review
            </Link>
          </div>
        </article>
        {/* Top 4 */}
        <article
          id="topFour"
          className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:flex-row lg:h-1/4"
        >
          {/* Image 4*/}
          <Link to={"/post/4"} className="w-full md:w-1/2">
            <CloudinaryImage
              publicId="cld-sample-4.jpg"
              alt={"Sample Image 4"}
              width={"462"}
              height={"462"}
              tailwind={"rounded-2xl object-cover aspect-video h-full w-full"}
            />
          </Link>
          {/* Content */}
          <div className="w-full md:w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">04.</h1>
              <Link to="/posts?cat=food" className="text-jean-800">
                Food
              </Link>
              <span className="text-sm text-gray-500">4 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/4"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Breakfast is the most important meal of the day
            </Link>
          </div>
        </article>
        {/* Top 5 */}
        <article
          id="topFive"
          className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:flex-row lg:h-1/4"
        >
          {/* Image 5*/}
          <iframe
            className="aspect-video h-full w-full rounded-2xl object-cover md:w-1/2"
            src="https://www.youtube.com/embed/4QpFnSsp4gU?si=k-brZvK24VbUPDNL"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
          {/* Content */}
          <div className="w-full md:w-1/2">
            {/* Details */}
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">05.</h1>
              <Link to="/posts?cat=games" className="text-jean-800">
                Games
              </Link>
              <span className="text-sm text-gray-500">5 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/5"
              className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl"
            >
              Foggedftw Tryndamere Guide Hail of Blades
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TopFive;
