import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Title from "../components/Title";
import TopFive from "../components/TopFive";
import PostList from "../components/PostList";

const Blog = () => {
  return (
    <main id="blog" className="mt-8">
      {/* Header */}
      <Header
        breadcrum={"Blog"}
        title={"Jean's Diary"}
        subtitle={
          "You think you know, but you have no idea. (I think that was the MTV line, right?)"
        }
      />
      {/* Categories */}
      <Categories />
      {/* Feature Post */}
      <Title title="Top 5" />
      <TopFive />
      {/* Post List */}
      <Title title="Recent Post" />
      <PostList />
    </main>
  );
};

export default Blog;
