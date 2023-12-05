import {useLocation } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import { useStore } from "../store/store";
import ImportModal from "../components/ImportModal";
import ViewPort from "./ViewPort";

export default function DynamicViewPort() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const {showModal} = useStore();
  return (
    <div className="relative h-full flex-1 flex flex-col gap-8 p-10 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <ContentHeader isActive={isActive}/>
        <ViewPort/>
        {showModal ? <ImportModal/> : null }
    </div>
  )
}
