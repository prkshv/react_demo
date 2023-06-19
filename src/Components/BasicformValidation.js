import React, { useState } from "react";

const BasicformValidation = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandler(e) {
    e.preventDefault();
    console.log(user, password);
  }
  function userHandler(e) {
    setUser(e.target.value);
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
    let item = e.target.value;
    if (item.length < 6) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input onChange={userHandler} type="text" placeholder="user id" />
        {userErr ? <h1>At least 3 letters ar allowed</h1> : ""}
        <input onChange={passwordHandler} type="text" placeholder="password" />
        {passErr ? <h1>password should be at least 6 letters long</h1> : ""}
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={props.Data}>Prop Funct</button>
    </div>
  );
};

export default BasicformValidation;
