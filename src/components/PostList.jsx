import React from "react";
import PostPreview from "./PostPreview";

const PostList = () => {
  return (
    <section id="postList" className="my-8 flex flex-col gap-4">
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </section>
  );
};

export default PostList;
