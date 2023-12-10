import { faClose, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
import { useStore } from '../../store/store';
//{ player, onEdit, onDelete, onClose }
const ActionDialog = ({position}) => {
    const {setShowActionDialog, setShowConfirmationDialog, setShowEditDialog} = useStore();
    const dialogPosition = {
      position: 'absolute',
      left: `${1025}px`,
      top: `${position.y}px`,
      zIndex:1000
      // Optionally add a width, padding, etc.
    };

    const handleDialogClose = () => {
      setShowActionDialog(false);
    }

    const handleConfirmationDialogOpen = () => {
      setShowConfirmationDialog(true);
      setShowActionDialog(false);
    }

    const handleEditDialogOpen = () => {
      setShowEditDialog(true);
      setShowActionDialog(false);
    }

    return (
      <>
      <div className='fixed inset-0 bg-black bg-opacity-5' onClick={handleDialogClose}></div>
      <div className={`flex flex-col gap-4 w-[233px] h-[167px] px-4 pt-4 pb-6 absolute bg-neutral-2 rounded-lg shadow-modal`} style={dialogPosition}>
        <div className='flex justify-between items-center'>
          <span className='text-[18px] leading-[27px] font-semibold text-texts-heading'>Actions</span>
          <FontAwesomeIcon icon={faClose} className='cursor-pointer py-1 px-[7px] text-[16px] leading-4 text-texts-normal' onClick={handleDialogClose}/>
        </div>
        <div className="flex flex-col">
          <div className='flex items-center py-2 gap-2 cursor-pointer' onClick={handleEditDialogOpen}>
            <FontAwesomeIcon className='p-1 text-[16px] leading-4 text-texts-muted' icon={faPen}/>
            <span className='text-[14px] leading-[21px] text-texts-normal'>Edit Player</span>
          </div>
          <div className='flex items-center py-2 gap-2 cursor-pointer' onClick={handleConfirmationDialogOpen}>
            <FontAwesomeIcon className='p-1 text-[16px] leading-4 text-texts-muted' icon={faTrashAlt}/>
            <span className='text-[14px] leading-[21px] text-texts-normal'>Delete Player</span>
          </div>
        </div>
      </div>
      </>
    );
};

ActionDialog.propTypes = {
  position: PropTypes.object,
  player: PropTypes.object
}

export default ActionDialog;