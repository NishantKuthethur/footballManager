import {Route, Routes, Navigate } from "react-router-dom";
import RosterView from "../components/RosterView";
import FormationOverview from "../components/FormationOverview"

export default function ViewPort() {
  return (
    <div className=" w-[1226px] h-[608px] rounded-[8px] text-texts-normal  bg-neutral-2">
      <Routes>
            <Route path="/" element={<Navigate replace to={'/roster'}/>}/>
            <Route path="/roster" element={<RosterView/>}/>
            <Route path="/formation" element={<FormationOverview/>}/>
            {/* Redirect any unknown paths to "/roster" */}
            <Route path="*" element={<Navigate to="/roster" />} />
        </Routes>
    </div>
  )
}
