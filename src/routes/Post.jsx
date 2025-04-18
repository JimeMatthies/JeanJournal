import React from "react";
import CloudinaryImage from "../utilities/CloudinaryImage";
import PostActions from "../components/PostActions";
import Search from "../components/Search";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <main id="post" className="mt-4 flex flex-col gap-8">
      {/* Preview */}
      <article className="flex flex-col gap-8 rounded-3xl bg-white p-4 shadow-lg md:flex-row">
        {/* Content */}
        <div className="flex flex-col gap-4 md:w-2/3">
          {/* Title*/}
          <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl">
            Basket is Cool!
          </h1>
          {/* Details */}
          <div className="flex items-center gap-2 text-sm">
            <Link to="/posts?cat=sports" className="text-jean-800">
              Sport
            </Link>
            <span>1 day ago</span>
          </div>
          {/* Image */}
          <CloudinaryImage
            publicId="cld-sample-3.jpg"
            alt={"Sample Image 3"}
            tailwind={
              "rounded-2xl object-cover h-full w-full md:w-1/3  md:hidden"
            }
          />
          {/* Description */}
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat delectus repudiandae dicta praesentium sequi harum temporibus
            beatae. Repellendus earum aliquid repudiandae modi dicta labore cum
            corrupti magni fuga culpa?
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ea, veniam exercitationem, placeat debitis possimus fugit quas
            deserunt quis dicta natus ipsa repudiandae excepturi blanditiis,
            magnam quod eos incidunt. Beatae!
          </p>
          {/* Read More Link */}
          <a
            href="#content"
            className="group border-jean-500 text-jean-600 relative mt-4 inline-flex w-36 items-center justify-center overflow-hidden rounded-full border-2 px-6 py-3 font-medium shadow-md transition duration-300 ease-out"
          >
            <span className="ease bg-jean-500 absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)"
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
          </a>
        </div>
        {/* Image */}
        <CloudinaryImage
          publicId="cld-sample-3.jpg"
          alt={"Sample Image 3"}
          tailwind={
            "rounded-2xl object-cover h-full w-full md:w-1/3 hidden md:block"
          }
        />
      </article>
      {/* Content */}
      <section
        id="content"
        className="flex scroll-mt-4 flex-col justify-between gap-12 md:flex-row"
      >
        {/* Full Article */}
        <article className="flex flex-col gap-6 text-justify lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
        </article>
        {/* Menu */}
        <div className="sticky top-8 mb-4 h-max px-4">
          {/* Author */}
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg">
            <h1 className="text-sm font-medium">Author</h1>
            <Link to="/jean" className="flex items-center gap-4">
              <CloudinaryImage
                publicId={"Jean_Logo_Fondo_obir7f.png"}
                alt={"Logo"}
                width={"64"}
                height={"64"}
                tailwind={"w-1/3 object-cover rounded-full"}
              />
              <p className="text-jean-800 flex w-2/3">Jean&#9734;</p>
            </Link>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          {/* Actions */}
          <PostActions />
          {/* Categories */}
          <h1 className="mt-4 text-sm font-medium">Categories</h1>
          <div className="my-4 flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Music
            </Link>
            <Link className="underline" to="/">
              Games
            </Link>
            <Link className="underline" to="/">
              Movies
            </Link>
            <Link className="underline" to="/">
              Series
            </Link>
            <Link className="underline" to="/">
              Youtube
            </Link>
            <Link className="underline" to="/">
              Sports
            </Link>
            <Link className="underline" to="/">
              Food
            </Link>
            <Link className="underline" to="/">
              Jean
            </Link>
          </div>
          <Search />
        </div>
      </section>
    </main>
  );
};

export default Post;
