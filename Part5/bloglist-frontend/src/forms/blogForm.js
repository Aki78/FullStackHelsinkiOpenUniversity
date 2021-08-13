import React from "react";

const LoginForm = ({
  newTitle,
  newAuthor,
  newURL,
  addBlog,
  handleNewTitle,
  handleNewAuthor,
  handleNewURL,
}) => {
  return (
    <form onSubmit={addBlog}>
      title:
      <input value={newTitle} onChange={handleNewTitle} />
      author:
      <input value={newAuthor} onChange={handleNewAuthor} />
      url:
      <input value={newURL} onChange={handleNewURL} />
      <button type="submit">save</button>
    </form>
  );
};

export default LoginForm;
