import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
    return <div style={{
        display: "flex", justifyContent: "space-between"
    }}>
        <div>
            <Typography variant={"h5"}>Coursera</Typography>
        </div>
        <div style={{display:"flex"}}>
            <div>
                <Button variant={"contained"}>Sign up</Button>
            </div>
            <div>
                <Button variant={"contained"}>Sign in</Button>
            </div>

        </div>


    </div>;
}

export default Appbar;
