import React, {useState} from 'react'
import {Card, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddCourse() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
            <div>
                <Typography
                    variant={"h6"}
                    style={{display: "flex", justifyContent: "center", margin: "10px"}}
                >
                    Add New Course
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "570px"
                }}>
                    <Card variant={"outlined"} style={{width: "400px", padding: "20px"}}>
                        <TextField
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            fullWidth
                            label="Title"
                            variant="outlined"
                        />
                        <br/> <br/>
                        <TextField
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            fullWidth
                            label="Description"
                            variant="outlined"
                        />
                        <br/>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button size={"large"} variant="contained" onClick={() => {
                                function callback2(data) {
                                    localStorage.setItem("token", data.token)
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
                                Add course
                            </Button>
                        </div>
                    </Card>

                </div>

            </div>
        </div>
    )
}

export default AddCourse
