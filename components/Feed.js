import React from "react";
import CreatePosts from "./CreatePosts";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto ">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Create Post Box */}
        <CreatePosts />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
