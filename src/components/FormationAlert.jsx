import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../store/store";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function FormationAlert() {
  const { formationAlert } = useStore();

  return (
    <div className="fixed flex flex-col w-fit h-[127px] rounded-lg p-6 bg-neutral-2 left-[489px] top-[320px] gap-2">
        <div className="flex w-[331px] items-center justify-center gap-2">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-primary-orange"/>
            <h2 className="text-[18px] leading-[27px] font-semibold text-texts-heading text-center">{formationAlert.header}</h2>
        </div>
        <p className="w-[331px] text-[14px] h-11 tracking-tighter leading-[22px] font-normal text-texts-normal text-center">{formationAlert.message}</p>
    </div>
  )
}
