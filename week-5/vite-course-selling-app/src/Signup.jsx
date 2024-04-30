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
            padding: "20px",
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size={"largdfadfafasfe"} variant="contained">Sign Up</Button>
        </div>
      </center>
    </div>
  );
}

export default Signup;
