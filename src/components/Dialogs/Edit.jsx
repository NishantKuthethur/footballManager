// import React from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '../../store/store'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';
import TextInput from '../common/TextInput'
import Selection from '../common/Selection'
import { useState } from 'react';
import Radio from '../common/Radio';

const Edit = () => {
  const {setShowEditDialog, roster, setRoster, actionForPlayer, checkFormationStarters} = useStore();

  const [editedPlayer, setEditedPlayer] = useState({...actionForPlayer});
  const isFormChanged = JSON.stringify(actionForPlayer) !== JSON.stringify(editedPlayer);

  const handleStarterChange = (e) => {
    setEditedPlayer({...editedPlayer, Starter: e.target.value});
    
  };

  const handleEditPlayer = () => {
    const updatedRoster = roster.map(p => 
      p.id === editedPlayer.id ? editedPlayer : p
    );
    setRoster(updatedRoster);
    checkFormationStarters()
    setShowEditDialog(false);
  };

  const dialogPosition = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  const dialogBoxStyle = 'w-[480px] h-[582px] rounded-lg bg-neutral-2 p-6';


  const handleDialogClose = () => {
    setShowEditDialog(false);
  }

  const handleInputChange = (field, value) => {
    console.log(field);
    console.log(value);
    setEditedPlayer({ ...editedPlayer, [field]: value });
  };


  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-30' onClick={() => setShowEditDialog(false)}></div>
      <div className={`${dialogPosition} ${dialogBoxStyle} flex flex-col gap-6`}>
        <div className='flex justify-between'>
          <span className='text-[18px] leading-[27px] font-semibold text-texts-heading'>Edit Player</span>
          <FontAwesomeIcon icon={faClose} className='cursor-pointer py-1 px-[7px] text-[16px] leading-4 text-texts-normal' onClick={handleDialogClose}/>
        </div>
        <div className='flex flex-col gap-4 h-[413px] w-[432px]'>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-2 w-[273px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Player Name</label>
                <TextInput initialValue={editedPlayer["Player Name"]}  onChange={(value) => handleInputChange("Player Name", value)}/>
              </div>
              <div className='flex flex-col gap-2 w-[142px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Jersey Number</label>
                <TextInput initialValue={editedPlayer["Jersey Number"]}  onChange={(value) => handleInputChange("Jersey Number", value)}/>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='flex flex-col gap-2 w-[208px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Height</label>
                <TextInput initialValue={editedPlayer.Height} onChange={(value) => handleInputChange("Height", value)}/>
              </div>
              <div className='flex flex-col gap-2 w-[208px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Weight</label>
                <TextInput initialValue={editedPlayer.Weight} onChange={(value) => handleInputChange("Weight", value)}/>
              </div>
            </div>
              <div className='flex flex-col gap-2 w-full h-[73px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Nationality</label>
                <Selection selected={actionForPlayer.Nationality}/>
              </div>
              <div className='flex flex-col gap-2 w-full h-[73px]'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Position</label>
                <Selection selected={editedPlayer.Position}/>
              </div>
            <div className='flex items-center justify-start'>
              <div className='flex flex-col gap-4 w-full h-[59px] justify-center items-start'>
                <label className='text-white font-medium text-[14px] leading-[22px]'>Starter</label>
                <div className='flex gap-4'>
                  <div className='flex h-22px items-center gap-3'>
                  <Radio 
                    name='starter' 
                    value='No' 
                    checked={editedPlayer.Starter === 'No'} 
                    onChange={handleStarterChange}
                  />
                  <label className=' font-normal text-[14px] leading-[22px]'>No</label>
                  </div>
                  <div  className='flex h-22px items-center gap-3'>
                  <Radio
                    name='starter' 
                    value='Yes' 
                    checked={editedPlayer.Starter === 'Yes'} 
                    onChange={handleStarterChange} 
                  />
                  <label className=' font-normal text-[14px] leading-[22px]'>Yes</label>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
        <div className='flex justify-end items-center'>
              <Button 
                text='Edit Player' 
                type='primary' 
                onClick={handleEditPlayer}
                isDisabled={!isFormChanged}/>
            </div>
      </div>
    </>
  )
}


export default Edit
