import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Signup() {
  return (
    <div>
      <center>
        <div style={{ marginTop: "150px", marginBottom: "10px" }}>
          Welcome to Coursera Signup above
        </div>
      </center>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: "400px",
          }}
        >
          Username -{" "}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <br />
          Password -{" "}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <br />
          <Button variant="contained">Sign Up</Button>
        </div>
      </center>
    </div>
  );
}

export default Signup;
