import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        fullWidth
                        label="Email"
                        variant="outlined"
                    />
                    <br/> <br/>
                    <TextField
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type={"password"}
                    />
                    <br/>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button size={"large"} variant="contained" onClick={() => {
                            function callback2(data){
                                localStorage.setItem("token",data.token)
                                // console.log(data)
                            }
                            function callback1(res) {
                                res.json().then(callback2)
                            }

                            fetch("http://localhost:3000/admin/signup", {
                                method: "POST",
                                body: JSON.stringify({
                                    username: email,
                                    password: password
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            }).then(callback1)
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
