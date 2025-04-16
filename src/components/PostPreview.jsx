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
          to="/posts/1"
          className="flex flex-col items-center justify-center p-4 md:items-end"
        >
          <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-teal-500 px-6 py-3 font-medium text-teal-600 shadow-md transition duration-300 ease-out">
            <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-teal-500 text-white duration-300 group-hover:translate-x-0">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="ease absolute flex h-full w-full transform items-center justify-center text-teal-500 transition-all duration-300 group-hover:translate-x-full">
              Read More
            </span>
            <span class="invisible relative">Read More</span>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PostPreview;
