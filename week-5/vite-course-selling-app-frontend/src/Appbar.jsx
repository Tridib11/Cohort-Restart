import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4px",
      }}
    >
      <div>
        <Typography variant={"h5"}>Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <Button
            variant={"contained"}
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign up
          </Button>
        </div>
        <div>
          <Button variant={"contained"} onClick={()=>{
              window.location="/signin"
          }}>Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
