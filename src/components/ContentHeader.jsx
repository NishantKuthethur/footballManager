import { useState } from 'react';
import PropTypes from 'prop-types'
import { useStore } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import TextInput from './common/TextInput';
import SearchInput from './SearchInput';

function ContentHeader({isActive}) {

  const [isEditing, setIsEditing] = useState(false);
  const {teamName, setTeamName} = useStore();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    if(e.target.value.length > 0){
        setTeamName(e.target.value);
    }
    else{
        setTeamName(teamName);
    }
  }

  const handleBlur = () => {
    setIsEditing(false);
  }

  return (
    <div className='flex justify-between'>
      <div className='flex flex-col'>
        <h2 className="text-primary-orange text-[12px] leading-[18px]">
        {isActive('/roster') && "Roster Details"}
        {isActive('/formation') && "Formation Overview"}
        </h2>
        {isEditing ? (
          <TextInput placeholder={"Your Team's Name"} initialValue={teamName} onChange={handleNameChange} onBlur={handleBlur}  autoFocus/>
        ) : (
          <div className="text-texts-heading flex items-center gap-2" onClick={handleEditClick}>
            <h2 className='text-[18px] leading-[24px]'>{teamName}</h2>
            <FontAwesomeIcon className="p-[5px] text-[14px]" icon={faPen}/>
          </div>
        )}
      </div>
      <SearchInput/>
    </div>
  )
}

ContentHeader.propTypes = {
    isActive: PropTypes.func.isRequired,
}

export default ContentHeader

