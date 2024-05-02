import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";

function Signin() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "570px"
            }}
        >
            <div>
                <Typography
                    variant={"h6"}
                    style={{display: "flex", justifyContent: "center", margin: "10px"}}
                >
                    Welcome back, Signin below
                </Typography>
                <Card variant={"outlined"} style={{width: "400px", padding: "20px"}}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />
                    <br/> <br/>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br/>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button size={"large"} variant="contained">
                            Sign in
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Signin;
