import { Outlet } from "react-router-dom";
import Navbar from "./components/Includes/Navbar";
function App() {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    );
}

export default App;
