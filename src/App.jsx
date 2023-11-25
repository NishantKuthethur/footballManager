
import { BrowserRouter as Router} from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import DynamicViewPort from "./layout/DynamicViewPort";
function App() {

  return (
    <Router>
      <div className='flex h-screen relative '>
        <Sidebar/>
        <DynamicViewPort/>
          
      </div>
    </Router>
  )
}

export default App
