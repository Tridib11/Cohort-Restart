import React from "react";

function Signup() {
  return (
    <div>
      <center>
        <div>Welcome to Coursera Signup above</div>
      </center>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: "400px",
            marginTop: "150px",
          }}
        >
          Username - <input type={"text"} />
          <br />
          Password - <input type={"password"} />
          <br />
          <button>Signup</button>
        </div>
      </center>
    </div>
  );
}

export default Signup;
