import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
    return <div style={{
        display: "flex",
        justifyContent: "space-between"
    }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
        <div>
            <Button>Sign up</Button>
            <Button>Sign in</Button>
        </div>


    </div>;
}

export default Appbar;
