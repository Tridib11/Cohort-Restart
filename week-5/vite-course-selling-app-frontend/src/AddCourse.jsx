import  {useState} from 'react'
import {Card, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddCourse() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image,setImage]=useState("")
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "570px"
        }}>
            <div>
                <Typography
                    variant={"h6"}
                    style={{display: "flex", justifyContent: "center", margin: "10px",}}
                >
                    Add New Course
                </Typography>

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
                    <TextField
                        onChange={(e) => {
                            setImage(e.target.value)
                        }}
                        fullWidth
                        label="Image link"
                        variant="outlined"
                    />
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Button size={"large"} variant="contained" onClick={() => {
                            function callback2(data) {
                                alert("Course Added")
                                // console.log(data)
                            }
                            function callback1(res) {
                                res.json().then(callback2)
                            }
                            fetch("http://localhost:3000/admin/courses", {
                                method: "POST",
                                body: JSON.stringify({
                                    title: title,
                                    description: description,
                                    imageLink: image,
                                    published: true

                                }),
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            }).then(callback1)
                        }}>
                            Add course
                        </Button>
                    </div>
                </Card>


            </div>
        </div>
    )
}

export default AddCourse
