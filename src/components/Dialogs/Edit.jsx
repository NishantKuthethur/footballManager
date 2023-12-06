// import React from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '../../store/store'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';

const Edit = () => {
  const {setShowEditDialog} = useStore();

  const dialogPosition = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  const dialogBoxStyle = 'w-[480px] h-[582px] rounded-lg bg-neutral-2 p-6';

  const handleDialogClose = () => {
    setShowEditDialog(false);
  }
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-30' onClick={() => setShowEditDialog(false)}></div>
      <div className={`${dialogPosition} ${dialogBoxStyle} flex flex-col gap-6`}>
        <div className='flex justify-between'>
          <span className='text-[18px] leading-[27px] font-semibold text-texts-heading'>Edit Player</span>
          <FontAwesomeIcon icon={faClose} className='cursor-pointer py-1 px-[7px] text-[16px] leading-4 text-texts-normal' onClick={handleDialogClose}/>
        </div>
        <div className='flex flex-col h-[413px] w-[432px]'>
            
        </div>
        <div className='flex justify-end items-center'>
          <Button text='Edit Player' type='primary' isDisabled/>
        </div>
      </div>
    </>
  )
}

Edit.propTypes = {

}

export default Edit
