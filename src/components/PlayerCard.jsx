import { useStore } from "../store/store";

export default function PlayerCard() {

  const {selectedPlayer} = useStore();
  
  return selectedPlayer ? (
      <div className='flex flex-col gap-6 h-[541px] w-[322px] rounded  bg-neutral-1 p-6'>
      <div className='flex justify-center items-center relative w-[274px] h-[258px]'>
        <h1 className='absolute h-[100px] w-10 text-[109.71px] font-semibold opacity-50 text-cardNumber leading-[100px] left-2 top-0'>{selectedPlayer["Jersey Number"]}</h1>
        <h1 className='absolute h-[62px] w-[15px] text-[41.14px] font-semibold text-primary-orange leading-[61.71px] left-[13px] top-[19px]'>{selectedPlayer["Jersey Number"]}</h1>
        <div className='relative'>
          <img className='object-cover h-[258px] w-[175px]' src={selectedPlayer["Player Image"]}  alt={selectedPlayer["Player Name"]} />
          <div className='overlay'></div>
        </div>
        <h1 className='absolute h-8 w-fit top-[200px] left-0 text-white font-medium text-2xl leading-9'>{selectedPlayer["Player Name"]}</h1>
        <h1 className='absolute h-[27px] w-[107px] top-[233px] left-0 text-primary-orange font-semibold text-[18px] leading-[27px] text-center'>{selectedPlayer.Position}</h1>
      </div>
      <div className='flex justify-start gap-8 w-[274px] h-[47px]'>
        <div className='flex flex-col justify-between gap-2'>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Height'}</div>
          <div className='text-[14px] leading-[21px] text-texts-heading'>{selectedPlayer.Height}</div>
        </div>
        <div className='flex flex-col justify-between '>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Weight'}</div>
          <div className='text-[14px] leading-[21px] text-texts-heading'>{selectedPlayer.Weight}</div>
        </div>
        <div className='flex flex-col justify-between '>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Nationality'}</div>
          <div className='flex gap-[10px] items-center'>
            <img className='h-4 w-4 object-contain border rounded-full' src={selectedPlayer["Flag Image"]} ></img>
            <span className='text-[14px] leading-[21px] text-texts-heading'>{selectedPlayer.Nationality}</span>
          </div>
        </div>
      </div>
      <div className='w-[274px] border border-borders-default'></div>
      <div className='flex flex-col w-[274px] h-[116px] gap-4'>
        <div className='flex flex-row items-center justify-start gap-12'>
          <div className='flex flex-col'>
            <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer.Appearances}</div>
            <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Appearances'}</div>
          </div>
          <div className='flex flex-col'>
            <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer["Minutes Played"]}</div>
            <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Minutes played'}</div>
          </div>
        </div>
        {
          selectedPlayer.Position === 'Goalkeeper' ? (
            <div className='flex flex-row items-center justify-start gap-12'>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer["Clean Sheets"]}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Clean Sheets '}</div>
              </div>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer.Saves}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Saves'}</div>
              </div>
            </div>
          ) :
          (
            <div className='flex flex-row items-center justify-start gap-12'>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer.Goals}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Goals'}</div>
              </div>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{selectedPlayer.Assists}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Assists'}</div>
                </div>
            </div>
          )
           
        }
      </div>
    </div>
    )
    :
    (
    <div className='flex flex-col gap-6 h-[541px] w-[322px] rounded  bg-neutral-1 p-6'>
    <div className='flex justify-center items-center relative w-[274px] h-[258px]'>
      
    </div>
    <div className='flex justify-start gap-8 w-[274px] h-[47px]'>
      
    </div>
    <div className='w-[274px] border border-borders-default'></div>
    <div className='flex flex-col w-[274px] h-[116px] gap-4'>
    </div>
  </div>
  )
}
