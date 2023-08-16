// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const url = "https://blog-with-react.onrender.com/api/blogs";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      <h2 style={{ textAlign: "center" }}>All blogs</h2>
      {error && <div> {error} </div>}
      {isPending && <div> loading... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
