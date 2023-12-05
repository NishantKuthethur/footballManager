import { useState } from 'react';
import PropTypes from 'prop-types'
import { useStore } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import TextInput from './common/TextInput';
import SearchInput from './SearchInput';
import Button from './common/Button'

function ContentHeader({isActive}) {

  const [isEditing, setIsEditing] = useState(false);
  
  const {teamName, setTeamName, setShowModal, isTeamNameEdited, setIsTeamNameEdited, setSummary, roster} = useStore();
  //Edit team name functions
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    if(e.target.value.length > 0){
        setTeamName(e.target.value);
    }
    else{
        setTeamName(teamName);
    }
    setIsTeamNameEdited(true);
  }

  const handleBlur = () => {
    setIsEditing(false);
  }

  //Import button/modal functions

  const openImportModal = () => {
    setSummary('');
    setShowModal(true);
  }

  const importButtonText = roster.length>0 ?'Re-Import Team' : 'Import Team';
  const importButtonType = roster.length>0 ? 'secondary' : 'primary';
  return (
    <div className='flex justify-between mr-20'>
      <div className='flex flex-col'>
        <h2 className="text-primary-orange text-[12px] leading-[18px] font-medium">
        {isActive('/roster') && "Roster Details"}
        {isActive('/formation') && "Formation Overview"}
        </h2>
        {isEditing ? (
          <TextInput placeholder={"Your Team's Name"} initialValue={teamName} onChange={handleNameChange} onBlur={handleBlur}  autoFocus/>
        ) : (
          <div className="group text-texts-heading flex items-center gap-2" onClick={handleEditClick}>
            <h2 className='text-[18px] leading-[24px] font-semibold'>{teamName}</h2>
            <FontAwesomeIcon className={`p-[5px] text-[14px] ${isTeamNameEdited ? 'opacity-0 group-hover:opacity-100':''}`} icon={faPen}/>
          </div>
        )}
      </div>
      {isActive('/roster') ?<div className='flex gap-2 items-center'> <SearchInput/> <Button text={importButtonText} type={importButtonType} onClick={openImportModal}/></div>: null}
      
    </div>
  )
}

ContentHeader.propTypes = {
    isActive: PropTypes.func.isRequired,
}

export default ContentHeader

