import { faClose, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
import { useStore } from '../../store/store';
//{ player, onEdit, onDelete, onClose }
const ActionDialog = ({position}) => {
    const {setShowActionDialog} = useStore();
    const dialogPosition = {
      position: 'absolute',
      left: `${1050}px`,
      top: `${position.y}px`,
      zIndex:1000
      // Optionally add a width, padding, etc.
    };

    const handleDialogClose = () => {
      console.log('close');
      setShowActionDialog(false);
    }

    return (
      <>
      <div className='fixed inset-0 bg-black bg-opacity-5' onClick={handleDialogClose}></div>
      <div className={`flex flex-col gap-4 w-[201px] h-27px px-4 pt-4 pb-6 absolute bg-neutral-2 rounded-lg shadow-modal`} style={dialogPosition}>
        <div className='flex justify-between'>
          <span>Actions</span>
          <FontAwesomeIcon icon={faClose} className='cursor-pointer' onClick={handleDialogClose}/>
        </div>
        <div className="flex flex-col">
          <div className='flex items-center py-2 gap-2'>
            <FontAwesomeIcon icon={faEdit}/>
            <span>Edit</span>
          </div>
          <div className='flex items-center py-2 gap-2'>
            <FontAwesomeIcon icon={faTrash}/>
            <span>Delete</span>
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