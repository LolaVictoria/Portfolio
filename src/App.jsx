import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainPage from "./pages/mainpage"
import Resume from "./components/resume"
import Project from "./components/project"

const App = () => {

  return (
    <Router>
      <div>
      <Routes>

        <Route path="/" element={<MainPage/>} />
        <Route path="/resume"  element={<Resume/>} />
        <Route path="/project" element={<Project/>} />
        
      </Routes>
    </div>
    </Router>
  )
}
export default App