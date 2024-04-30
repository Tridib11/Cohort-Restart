import React from "react";

function Signup() {
  return (
    <div>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: "400px",
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
