import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";


// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Signin/>} />
                <Route path="/register" element={<Signup/>} />
            </Routes>
        </Router>
    );
}

export default App;