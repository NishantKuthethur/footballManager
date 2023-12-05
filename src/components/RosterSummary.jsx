
import { useStore } from '../store/store'

const RosterSummary = () => {
  const {summary} =useStore();
  const isSummaryEmpty = Object.keys(summary).length === 0;
  
  
  return (!isSummaryEmpty ?
    (<div className='absolute left-6 top-[224px] flex flex-col gap-6'>
    <h2 className='text-texts-heading'>File Summary</h2>
    <div className='flex flex-row text-texts-normal flex-wrap'>
        {Object.entries(summary).map(([key, value]) => (
            <div key={key} className='flex flex-col w-[150px]'>
                <h2 className='text-[14px] leading-[21px]'>{key}</h2>
                <span className='text-[16px] leading-6'>{value}</span>
            </div>
        ))}
    </div>
    </div>)
    :
    null
  )
}

RosterSummary.propTypes = {

}

export default RosterSummary
