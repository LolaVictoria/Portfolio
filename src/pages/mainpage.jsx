//import Contact from "../components/contact";
import Navbar from "../components/navbar"
import Project from "../components/project";
import Resume from "../components/resume";
import Home from "./home";

const MainPage = () => {

    return (
        <div>
            <Navbar />
            <Home />
            <Project/>
            <Resume />
            
            {/* <Contact /> */}
            

        </div>
    )
}
export default MainPage;