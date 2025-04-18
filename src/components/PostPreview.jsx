import React from "react";
import CloudinaryImage from "../utilities/CloudinaryImage";
import { Link } from "react-router-dom";

//Props: link, imgId, imgAlt, title, author, category, date, description

const PostPreview = () => {
  return (
    <article className="flex flex-col gap-8 rounded-3xl bg-white p-4 shadow-lg md:flex-row">
      {/* Image */}
      <Link to="/post/1" className="xl:block xl:w-1/3">
        <CloudinaryImage
          publicId="cld-sample-3.jpg"
          alt={"Sample Image 3"}
          tailwind={"rounded-2xl object-cover h-full w-full"}
        />
      </Link>
      {/* Content */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        {/* Title */}
        <Link to="/post/1" className="text-4xl font-semibold">
          Basket is Cool!
        </Link>
        {/* Details */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link to="/posts?cat=sports" className="text-jean-800">
            Sports
          </Link>
          <span>2 days ago</span>
        </div>
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          fugiat delectus repudiandae dicta praesentium sequi harum temporibus
          beatae. Repellendus earum aliquid repudiandae modi dicta labore cum
          corrupti magni fuga culpa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ea, veniam exercitationem, placeat debitis possimus fugit quas
          deserunt quis dicta natus ipsa repudiandae excepturi blanditiis,
          magnam quod eos incidunt. Beatae!
        </p>
        {/* Read More Link */}

        <Link
          to="/post/1"
          className="group border-jean-500 text-jean-600 relative inline-flex w-36 flex-col items-center justify-center overflow-hidden rounded-full border-2 p-4 px-6 py-3 font-medium shadow-md transition duration-300 ease-out"
        >
          <span className="ease bg-jean-500 absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="ease text-jean-500 absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
            Read More
          </span>
          <span className="invisible relative">Read More</span>
        </Link>
      </div>
    </article>
  );
};

export default PostPreview;
