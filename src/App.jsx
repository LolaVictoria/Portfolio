import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import MainPage from "./pages/mainpage"
//import Home from "./pages/home"
import Contact from "./components/contact"
import MainPage from "./pages/mainpage"

const App = () => {

  return (
    <Router>
      <div>
      <Routes>

        <Route path="/" element={<MainPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    </Router>
  )
}
export default App