import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const url = "http://localhost:1337/api/blogs/";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useNavigate();

  const { data: blog, error, isPending } = useFetch(url + id);

  const handleClick = () => {
    fetch(url + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div> {error} </div>}
      {isPending && <div> loading... </div>}
      {blog && (
        <article>
          <h2>{blog.attributes.title}</h2>
          <p> Written by {blog.attributes.author} </p>
          <div> {blog.attributes.body} </div>
          <button className="delete-button" onClick={handleClick}>
            delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
