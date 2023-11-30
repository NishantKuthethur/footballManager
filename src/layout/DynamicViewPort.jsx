import {Route, Routes, Navigate, useLocation } from "react-router-dom";

import RosterView from "../components/RosterView";
import FormationOverview from "../components/FormationOverview"
import ContentHeader from "../components/ContentHeader";
import { useStore } from "../store/store";
import ImportModal from "../components/ImportModal";

export default function DynamicViewPort() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const {showModal,setShowModal} = useStore();
  return (
    <div className="relative flex-1 flex flex-col gap-8 p-10 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <ContentHeader isActive={isActive}/>
        <Routes>
            <Route path="/" element={<Navigate replace to={'/roster'}/>}/>
            <Route path="/roster" element={<RosterView/>}/>
            <Route path="/formation" element={<FormationOverview/>}/>
            {/* Redirect any unknown paths to "/roster" */}
            <Route path="*" element={<Navigate to="/roster" />} />
        </Routes>
        {showModal ? <ImportModal/> : null }
    </div>
  )
}
