import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";

function App() {
    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}>
            <Appbar/>
            <Router>
                <Routes>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </Router>
        </div>

    );
}

export default App;