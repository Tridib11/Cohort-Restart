import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";

function Signup() {
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
                    Welcome to Coursera Signup above
                </Typography>
                <Card variant={"outlined"} style={{width: "400px", padding: "20px"}}>
                    <TextField
                        fullWidth
                        id={"username"}
                        label="Email"
                        variant="outlined"
                    />
                    <br/> <br/>
                    <TextField
                        fullWidth
                        id={"password"}
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br/>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button size={"large"} variant="contained" onClick={() => {
                            let username = document.getElementById('username').value
                            let password = document.getElementById('password').value
                            fetch("http://localhost:3000/admin/signup", {
                                method: "POST",
                                body: JSON.stringify({
                                    username,
                                    password
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                        }}>
                            Sign Up
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Signup;
