import { useStore } from "../store/store";
import FormationAlert from "./FormationAlert";
import FormationView from "./FormationView";
import PlayerCard from "./PlayerCard"
export default function FormationOverview() {
  const { roster, formationAlert } = useStore();
  const shouldShowAlert = roster.length > 0 && formationAlert.show;
  return (
    <div className='relative h-full w-full px-8 py-8 flex gap-8'>
      <div className="relative"> 
        {formationAlert.show && (
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> // Overlay
        )}
        <FormationView />
      </div>
      <PlayerCard/>
      {shouldShowAlert ? 
            <FormationAlert />
        : null}
    </div>
  )
}
