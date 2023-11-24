
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import RosterView from "./components/RosterView";
import FormationOverview from "./components/FormationOverview"
function App() {

  return (
    <Router>
      <div className='flex h-screen relative '>
        <Sidebar/>
        <div className="flex-1 p-10 bg-gradient-to-b from-neutral-800 to-neutral-900">
          <Routes>
            <Route path="/" element={<Navigate replace to={'/roster'}/>}/>
            <Route path="/roster" element={<RosterView/>}/>
            <Route path="/formation" element={<FormationOverview/>}/>
            {/* Redirect any unknown paths to "/roster" */}
            <Route path="*" element={<Navigate to="/roster" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
