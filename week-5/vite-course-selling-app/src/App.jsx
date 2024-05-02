import Signup from "./Signup";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";

function App() {
    return (
        <div
            style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}
        >
            <Appbar></Appbar>
            <Signin></Signin>
            {/*<Signup></Signup>*/}
        </div>
    );
}

export default App;
