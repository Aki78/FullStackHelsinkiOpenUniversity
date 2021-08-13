
const deleteToken = ({setUser}) => {
  window.localStorage.removeItem("loggedBlogappUser");
  window.localStorage.clear()
  setUser(null)
};

const Logout = () => {
  return <button onClick={deleteToken}>Logout</button>;
}

export default Logout;
