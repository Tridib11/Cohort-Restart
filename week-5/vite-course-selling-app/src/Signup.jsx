import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";

function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Typography
          variant={"h6"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          Welcome to Coursera Signup above
        </Typography>
        <Card variant={"outlined"} style={{ width: "400px", padding: "20px" }}>
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
          <Button size={"large"} variant="contained">
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
