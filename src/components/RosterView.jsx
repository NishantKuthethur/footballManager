import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '../store/store';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {Edit, Action, Confirmation} from './Dialogs';
const RosterView = () => {
  const { 
    searchValue, 
    roster, 
    setShowModal,
    showActionDialog, 
    setShowActionDialog ,
    showConfirmationDialog,
    showEditDialog
  } = useStore(); 
  //const [activePlayer, setActivePlayer] = useState(null);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const filteredPlayers = roster.filter(player =>
    player["Player Name"]?.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (roster.length === 0) {
    return (
      <div className='px-4 pt-[13px] h-full flex flex-col'>
      <div className='text-left text-[12px] leading-[18px] min-w-full text-texts-normal font-medium flex gap-32'>
        <div className='flex-grow'>Player Name</div>
        <div className='flex-grow'>Jersey Number</div>
        <div className='flex-grow'>Position</div>
        <div className='flex-grow'>Height</div>
        <div className='flex-grow'>Weight</div>
        <div className='flex-grow'>Nationality</div>
      </div>
        <div className='h-full flex flex-col gap-2 items-center justify-center'>
          <span className='texts-normal font-normal'>You do not have any players on the roster</span>
          <div className='flex justify-center cursor-pointer text-primary-orange font-medium' onClick={()=> {setShowModal(true)} }>Import Team</div>
        </div>
        
      </div>
    );
  }

  const handleActionButtonClick = (event) =>{
    const iconPos = event.currentTarget.getBoundingClientRect();
    setDialogPosition({ x: iconPos.left, y: iconPos.top -20});
    setShowActionDialog(true);
  }
  return (
    <div className='px-4 py-[13px] max-h-[594px] overflow-y-auto no-scrollbar font-medium'>
      <table className='table-fixed text-left min-w-full max-h-[594px] text-texts-normal'>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Jersey Number</th>
            <th>Starter</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Nationality</th>
            <th>Appearances</th>
            <th>Minutes Played</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr className='' key={index}>
              <td className='flex items-center' >
                <img src={player['Flag Image']} alt="flag" style={{ width: '30px', marginRight: '10px' }} />
                <span>{player["Player Name"]}</span>
              </td>
              <td className=''>{player["Jersey Number"]}</td>
              <td>{player["Starter"]}</td>
              <td>{player["Position"]}</td>
              <td>{player["Height"]}</td>
              <td>{player["Weight"]}</td>
              <td>{player["Nationality"]}</td>
              <td>{player["Appearances"]}</td>
              <td>{player["Minutes Played"]}</td>
              <td className='text-[16px] leading-4 relative'>
                <FontAwesomeIcon className='cursor-pointer' icon={faEllipsis} onClick={(event)=>handleActionButtonClick(event)}/>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showActionDialog ? <Action position={dialogPosition}/> : null}
      {showConfirmationDialog ? <Confirmation/> : null}
      {showEditDialog ? <Edit/> : null} 
    </div>
  );
};

export default RosterView;
