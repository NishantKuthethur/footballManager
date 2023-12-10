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
    showEditDialog,
    setActionForPlayer
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

  

  const handleActionButtonClick = (event, player) =>{
    const iconPos = event.currentTarget.getBoundingClientRect();
    setDialogPosition({ x: iconPos.left, y: iconPos.top -20});
    setShowActionDialog(true);
    setActionForPlayer(player);
  }
  return (
    <div className='px-4 py-[14px] md:h-[568px] h-[500px] font-medium'>
      <table className='table-fixed text-left min-w-full max-h-[568px] text-texts-normal'>
        <thead>
          <tr>
            <th className='w-[275px]'>Player Name</th>
            <th className='w-[128.5px]'>Jersey Number</th>
            <th className='w-[70.69px]'>Starter</th>
            <th className='w-[118.43px]'>Position</th>
            <th className='w-[68.85px]'>Height</th>
            <th className='w-[100.06px]'>Weight</th>
            <th className='w-[148.73px]'>Nationality</th>
            <th className='w-[115.68px]'>Appearances</th>
            <th className='w-[128.53px]'>Minutes Played</th>
            <th></th>
          </tr>
        </thead>
        </table>
        <div className='pb-[14px] md:h-[540px] h-[500px] font-medium overflow-y-auto no-scrollbar'>
        <table className=''>
        <tbody className='flex flex-col flex-wrap gap-2 w-[1193px]'>
          {filteredPlayers.map((player, index) => (
            <tr className='flex flex-row' key={index}>
              <td className='flex items-center w-[275px]' >
                <img src={player['Flag Image']} alt="flag" style={{ width: '30px', marginRight: '10px' }} />
                <span>{player["Player Name"]}</span>
              </td>
              <td className='flex items-center w-[128.5px]'>{player["Jersey Number"]}</td>
              <td className='w-[70.69px]'>{player["Starter"]}</td>
              <td className='w-[118.43px]'>{player["Position"]}</td>
              <td className='w-[68.85px]'>{player["Height"]}</td>
              <td className='w-[100.06px]'>{player["Weight"]}</td>
              <td className='w-[148.73px]'>{player["Nationality"]}</td>
              <td className='w-[115.68px]'>{player["Appearances"]}</td>
              <td className='w-[128.53px]'>{player["Minutes Played"]}</td>
              <td className='text-[16px] leading-4 relative'>
                <FontAwesomeIcon className='cursor-pointer' icon={faEllipsis} onClick={(event)=>handleActionButtonClick(event,player)}/>
                
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
     

      {showActionDialog ? <Action position={dialogPosition}/> : null}
      {showConfirmationDialog ? <Confirmation/> : null}
      {showEditDialog ? <Edit/> : null} 
    </div>
  );
};

export default RosterView;
