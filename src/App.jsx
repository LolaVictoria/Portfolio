import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Resume from "./components/resume"
import Project from "./components/project"
import Articles from "./components/articles"
import Home from "./components/home"

const App = () => {

  return (
    <Router>
      <div>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/resume"  element={<Resume/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/articles" element={<Articles />} />
        
      </Routes>
    </div>
    </Router>
  )
}
export default App