import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useNavigate();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`${process.env.REACT_APP_API}/${id}`);

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_API}/${blog.id}`, {
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
          <div
            dangerouslySetInnerHTML={{
              __html: blog.attributes.body
                .replace(/\\n/g, "<br>")
                .replace(/\\/g, " "),
            }}
          ></div>
          <button className="delete-button" onClick={handleClick}>
            delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
