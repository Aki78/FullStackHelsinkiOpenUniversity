import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/api/blogs/" + toString(id));
  };
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    display: visible,
  };
  return (
    <div style={blogStyle}>
      {blog.title}
      <button onClick={() => toggleVisibility(blog.id)}>view</button>
      <div style={showWhenVisible}>
        {blog.author}
        {blog.likes}
      </div>
      <button onClick={handleDelete}>remove</button>
    </div>
  );
};
export default Blog;
