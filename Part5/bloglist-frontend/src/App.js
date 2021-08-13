import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Logout from "./components/Logout";
import Togglable from "./components/Togglable";
import LoginForm from "./forms/loginForm";
import blogService from "./services/blogs";
import loginService from "./services/login";
import { PrintLog } from "./components/PrintLog";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newURL, setNewURL] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loginVisible, setLoginVisible] = useState(false);
  let [errorState, setErrorState] = useState(0);
  let [addState, setAddState] = useState(0);

  console.log("user", user);

  const myBlogs = async (theBlogs) => {
    const response = await axios.get("http://localhost:3001/api/blogs", {
      blogs,
    });
    console.log("response", response);
    return response.data;
  };

  //setTimeout(() => console.log("my", blogs), 3000);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      setErrorState(0);
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setErrorState((errorState += 1));
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const addBlog = () => {
    const response = axios.post("http://localhost:3001/api/blogs", {
      title: newTitle,
      author: newAuthor,
      url: newURL,
    });
  };
  const handleSubmit = () => {
    return 0;
  };
  const handleUsernameChange = (e) => {
    setUsername(e.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.value);
  };
  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? "none" : "" };
    const showWhenVisible = { display: loginVisible ? "" : "none" };
    return (
      <Togglable buttonLabel="login">
        <LoginForm
          handleSubmit={handleLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          username={username}
          password={password}
        />
      </Togglable>
    );
    //return (
    //<form onSubmit={handleLogin}>
    //<h2>hi</h2>
    //<div>
    //username
    //<input
    //type="text"
    //value={username}
    //name="Username"
    //onChange={({ target }) => setUsername(target.value)}
    ///>
    //</div>
    //<div>
    //password
    //<input
    //type="password"
    //value={password}
    //name="Password"
    //onChange={({ target }) => setPassword(target.value)}
    ///>
    //</div>
    //<button type="submit">login</button>
    //</form>
    //);
  };

  const blogForm = () => {
    return (
      <Togglable buttonLabel="new Blog">
        <form onSubmit={addBlog}>
          title:{" "}
          <input
            value={newTitle}
            onChange={({ target }) => setNewTitle(target.value)}
          />
          author:{" "}
          <input
            value={newAuthor}
            onChange={({ target }) => setNewAuthor(target.value)}
          />
          url:{" "}
          <input
            value={newURL}
            onChange={({ target }) => setNewURL(target.value)}
          />
          <button type="submit">save</button>
        </form>
      </Togglable>
    );
  };
  const injectMessage = `Added: ${newTitle} ${newAuthor}  `;
  console.log("erorsTATE", errorState);
  return (
    <div>
      <PrintLog
        injectMessage={injectMessage}
        user={user}
        errorState={errorState}
        addState={addState}
        setAddState={setAddState}
      />
      {user == null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>
          {blogForm()}
        </div>
      )}

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
      <Logout setUser="setUser" />
    </div>
  );
};

export default App;
//<Notification message={errorMessage} />
//
//{user === null && loginForm()}
//{user !== null && blogForm()}
//when log out: window.localStorage.removeItem('loggedBlogappUser'); window.localStorage.clear();
