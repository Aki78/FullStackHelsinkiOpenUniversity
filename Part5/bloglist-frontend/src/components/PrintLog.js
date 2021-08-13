import "../App.css";

export const PrintLog = ({ injectMessage, user, errorState, addState, setAddState }) => {
  console.log("ERRRRRR",user)
  if (user )
    return (
      <h3
        key={injectMessage}
        className={injectMessage.length > 3 ? "logMessage" : ""}
      >
        {injectMessage}
      </h3>
    );
  else if (errorState > 0)
    return (
      <h3 key={injectMessage} className={"logMessageError"}>
        Error: Wrong password or username
      </h3>
    );
  else return <div>Login {errorState}</div>;
};
