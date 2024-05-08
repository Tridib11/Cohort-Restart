import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Appbar() {
    const navigate = useNavigate();
    const [adminEmail,setAdminEmail]=useState(null)
    useEffect(() => {
        function callback2(data){
            if(data.username){
                setAdminEmail(data.username)
            }
        }
        function callback(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/me",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        }).then(callback)
    }, []);


    if(adminEmail) {
        return <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "4px",
            }}
        >
            <div>
                <Typography variant={"h5"}>Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10px"}}>
                    {adminEmail}
                </div>
                <div style={{marginRight: "10px"}}>
                    <Button variant={"contained"} onClick={() => {
                        localStorage.setItem("token",null)
                        window.location="/"
                    }}>Logout</Button>
                </div>
                <div style={{marginRight: "10px"}}>
                    <Button variant={"contained"} onClick={() => {
                        navigate("/addcourses")
                    }}>Add Course</Button>
                </div>
            </div>
        </div>
    }
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
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10px"}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signup")
                        }}
                    >
                        Sign up
                    </Button>
                </div>
                <div style={{marginRight: "10px"}}>
                    <Button variant={"contained"} onClick={() => {
                        navigate("/signin")
                    }}>Sign in</Button>
                </div>
            </div>
        </div>
    );
}

export default Appbar;
