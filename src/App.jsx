import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainPage from "./pages/mainpage"

const App = () => {

  return (
    <Router>
      <div>
      <Routes>

        <Route path="/" element={<MainPage/>} />
        
      </Routes>
    </div>
    </Router>
  )
}
export default App