import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
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