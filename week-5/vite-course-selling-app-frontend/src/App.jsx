import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";
function App() {
    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}>

            <Router>
                <Appbar/>
                <Routes>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/admin/addcourses" element={<AddCourse/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/course/:courseId" element={<Course/>}/>
                </Routes>
            </Router>
        </div>

    );
}

export default App;