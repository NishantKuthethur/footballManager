
import Button from './common/Button'
import { useStore } from '../store/store'
import FilePicker from './FilePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import RosterSummary from './RosterSUmmary'

const ImportModal = () => {
  const {
    importError, 
    setShowModal, 
    setRoster, 
    parsedPlayers, 
    roster, 
    checkFormationStarters, 
    setParsedPlayers,
    setImportError
  } = useStore()

  const handleRosterImport = () => {
    setRoster(parsedPlayers);
    console.log(roster);
    setParsedPlayers([]);
    checkFormationStarters(); 
    setShowModal(false);
  }

  const handleModalClose = () => {
    setShowModal(false);
    setParsedPlayers([]);
    setImportError('');
  }
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-50' onClick={handleModalClose}></div>
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-[8px] border-borders-default bg-neutral-2 shadow-modal'>
      <h2 className='absolute top-[18px] left-6 text-texts-heading'> Importer</h2>
      <FontAwesomeIcon icon={faClose} className='absolute top-[19px] left-[752px] py-1 px-[7px] text-texts-normal text-[16px] cursor-pointer'  onClick={handleModalClose}/>
      <div className="absolute w-[752px] h-[0px] mx-6 mt-[60px] mb-[540px] border border-borders-default"></div>
      <h3 className='absolute w-18 h-[21px] top-[84px] left-6 text-[14px] leading-[21px] text-texts-heading'>Roster File</h3>
      <FilePicker/>
      <span className={`absolute top-[173px] left-6 text-[14px] leading-[21px] ${importError ? 'text-primary-red':'text-texts-muted'}`}>
            {importError ? 'Error' : 'File must be in .csv format'}
      </span>
      {importError ? <span className='absolute top-[202px] left-6 text-[14px] leading-[21px] text-texts-muted'>Your sheet is missing data. Please ensure all cells are filled out.</span> : null }
      {parsedPlayers.length>0 ?<RosterSummary/> : null}
      <Button placementStyle='absolute bottom-6 right-6' text='Import' type='primary' onClick={handleRosterImport} isDisabled={!parsedPlayers.length}/>
    </div>
    </>
  )
}

ImportModal.propTypes = {

}

export default ImportModal
