import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStore } from '../../store/store'
import Button from '../common/Button';

const Confirmation = () => {
  
  const {setShowConfirmationDialog} = useStore();
  const handleDialogClose = () => {
    setShowConfirmationDialog(false);
  }

  const dialogPosition = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const dialogBoxStyle = 'w-[379px] h-[186px] rounded-lg px-6 pb-6 pt-[18px]';

  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-50' onClick={() => setShowConfirmationDialog(false)}></div>
    <div className={` flex flex-col gap-7 ${dialogPosition} ${dialogBoxStyle} bg-neutral-2`}>
      <div className='flex justify-between'>
        <span className='text-[18px] leading-[27px] font-semibold text-texts-heading'>Are you sure?</span>
        <FontAwesomeIcon icon={faClose} className='cursor-pointer py-1 px-[7px] text-[16px] leading-4 text-texts-normal' onClick={handleDialogClose}/>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-[14px] leading-[22px] font-normal text-texts-normal'>This action cannot be undone.</p>
      </div>
      <div className='flex flex-row items-center justify-end gap-2'>
        <Button type='secondary' text='Cancel' onClick={handleDialogClose}/>
        <Button type='primary' text='Delete' isDanger/>
      </div>
    </div>
    </>
  )
}

export default Confirmation
