import React, { useEffect, useState } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("/allpost", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result.posts))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      {posts.map((item, index) => {
        return <Post {...item} />;
      })}
    </>
  );
};

export default Home;
