import React from "react";

type Post = {
  id: number;
  title: string;
  img: string;
};

const getPosts = async () => {
  const res = await fetch("http://localhost:5000/plants");
  const data = await res.json();
  return data;
};

const About = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      {posts?.map((post: Post) => {
        return <div key={post?.id}>{post?.title}</div>;
      })}
    </>
  );
};

export default About;
