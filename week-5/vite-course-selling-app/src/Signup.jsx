import React from "react";

function Signup() {
  return (
    <div style={{
      border:"2px solid black"
    }}>
      Username - <input type={"text"} />
      <br />
      Password - <input type={"password"} />
      <br />
      <button>Signup</button>
    </div>
  );
}

export default Signup;
