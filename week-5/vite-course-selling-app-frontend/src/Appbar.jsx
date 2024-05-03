import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();
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
                <div style={{marginRight: "10px"}}>
                    <Button variant={"contained"} onClick={() => {
                        navigate("/addcourses")
                    }}>Add Course</Button>
                </div>
            </div>
        </div>
    );
}

export default Appbar;
