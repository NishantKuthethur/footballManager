
import Button from './common/Button'
import { useState, useRef} from 'react'
import { useStore } from '../store/store'
import { parseCSV } from '../util/parseCSV'
const FilePicker = () => {
  
    const [fileName, setFileName] = useState('');
    const {importError,setImportError, setParsedPlayers, setSummary} = useStore();
    const fileInputRef = useRef(null);
    

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        if (file.type === "text/csv") {
          parseCSV(file, setImportError)
          .then(players => {
            setParsedPlayers(players);
            
            const summary = players.reduce((acc, player) => {
              const position = player.Position; // Adjust based on your CSV structure
              acc[position] = (acc[position] || 0) + 1;
              return acc;
            }, { 'Total Players': players.length });
            setSummary(summary);

            setImportError(null);
          })
          .catch(error => {
            setParsedPlayers('');
            console.log(error);
          });
          setFileName(file.name);
        } else {
          setImportError('Please select a CSV file.');
        }
      }
    };
    

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    
  return (
    <div className={`absolute flex items-center justify-between top-[113px] left-6 rounded-[8px] pl-4 h-[44px] w-fit gap-[10px] border ${importError ? 'border-primary-red': 'border-borders-default'}`}>
      <span className={`${fileName ? ' text-texts-normal' : 'text-texts-muted'} text-[14px] leading-[21px]`}>
        {fileName || 'No file selected'}
      </span>
      <Button  placementStyle='' text='Select File' type='secondary'  onClick={handleButtonClick} isImportButton importError={importError}/>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".csv"
        onChange={handleFileChange}
      />
      
    </div>
  )
}


export default FilePicker
