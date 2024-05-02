import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
    return <div style={{
        display: "flex",
        justifyContent: "space-between"
    }}>
        <div style={{backgroundColor: "red"}}>
            <Typography variant={"h5"}>Coursera</Typography>
        </div>
        <div>
            <Button variant={"contained"}>Sign up</Button>
            <Button variant={"contained"}>Sign in</Button>
        </div>


    </div>;
}

export default Appbar;
