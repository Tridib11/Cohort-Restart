import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
    return (
        <>
            <div>
                <Typography>Coursera</Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight:"100px"
            }}>
                <Button>Sign up</Button>
                <Button>Sign in</Button>
            </div>
        </>)

}

export default Appbar;
