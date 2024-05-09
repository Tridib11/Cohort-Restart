import { useEffect, useState } from "react";
import {Card, Typography} from "@mui/material";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses)
        }

        function callback1(res) {
            res.json().then(callback2);
        }

        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(callback1);
    }, []);

    return (
        <div >
            <div><Typography>Courses</Typography></div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {courses.map((course) => {
                    return <Course key={course._id} course={course}/>;
                })}
            </div>

        </div>
    );
}

export default function Course(props) {
    return (
        <Card style={{
            margin: 10,
            width: 300,
            minHeight:200,

        }}>
            <div>
                <h6>{props.course._id}</h6>
                <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
                <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
                <img src={props.course.imageLink} style={{width:300,maxHeight:300}}/>
            </div>
        </Card>
    );
}

export default Courses;
