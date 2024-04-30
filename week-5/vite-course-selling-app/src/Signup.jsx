import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
function Signup() {
  return (
    <div>
      <center>
        <div style={{ marginTop: "150px", marginBottom: "10px" }}>
            <Typography variant={"h6"}>
                Welcome to Coursera Signup above
            </Typography>

        </div>
      </center>
      <center>
          <Card variant={"outlined"} style={{width:"400px", padding:"20px"}} >
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
              <Button size={"large"} variant="contained">Sign Up</Button>
          </Card>
      </center>
    </div>
  );
}

export default Signup;
