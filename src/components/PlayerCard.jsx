
export default function PlayerCard() {
  const isGoalie = true;
  return (
    <div className='flex flex-col gap-8 h-[616px] w-[322px] rounded  bg-neutral-1 p-6'>
      <div className='flex justify-center items-center relative w-[274px] h-[276px]'>
        <h1 className='absolute h-[100px] w-10 text-[109.71px] font-semibold opacity-50 text-cardNumber leading-[100px] left-2 top-0'>1</h1>
        <h1 className='absolute h-[62px] w-[15px] text-[41.14px] font-semibold text-primary-orange leading-[61.71px] left-[13px] top-[19px]'>1</h1>
        <div className='relative'>
          <img className='object-contain' src="https://www.psg.fr/media/33317/cards-23-24_navas-alt.png"  alt="" />
          <div className='overlay'></div>
        </div>
        <h1 className='absolute h-8 w-[158px] top-[215px] left-0 text-white font-medium text-2xl leading-9 text-center'>{'Keylor Navas'}</h1>
        <h1 className='absolute h-[27px] w-[107px] top-[251px] left-0 text-primary-orange font-semibold text-[18px] leading-[27px] text-center'>{'Goalkeeper'}</h1>
      </div>
      <div className='flex justify-start gap-8 w-[274px] h-[50px]'>
        <div className='flex flex-col justify-between '>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Height'}</div>
          <div className='text-[14px] leading-[21px] text-texts-heading'>{'1.85 m'}</div>
        </div>
        <div className='flex flex-col justify-between '>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Weight'}</div>
          <div className='text-[14px] leading-[21px] text-texts-heading'>{'80 kg'}</div>
        </div>
        <div className='flex flex-col justify-between '>
          <div className='text-[12px] leading-[18px] text-texts-normal'>{'Nationality'}</div>
          <div className='flex gap-[10px] items-center'>
            <img className='h-4 w-4 object-contain border rounded-full' src='https://cdn-icons-png.flaticon.com/512/197/197506.png' ></img>
            <span className='text-[14px] leading-[21px] text-texts-heading'>{'Costa Rican'}</span>
          </div>
        </div>
      </div>
      <div className='w-[274px] border border-borders-default'></div>
      <div className='flex flex-col w-[274px] h-[144px] gap-6'>
        <div className='flex flex-row items-center justify-start gap-12'>
          <div className='flex flex-col'>
            <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'26'}</div>
            <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Appearances'}</div>
          </div>
          <div className='flex flex-col'>
            <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'2308'}</div>
            <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Minutes played'}</div>
          </div>
        </div>
        {
          isGoalie ? (
            <div className='flex flex-row items-center justify-start gap-12'>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'10'}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Clean Sheets '}</div>
              </div>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'76'}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Saves'}</div>
              </div>
            </div>
          ) :
          (
            <div className='flex flex-row items-center justify-start gap-12'>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'26'}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Goals'}</div>
              </div>
              <div className='flex flex-col'>
                <div className=' text-primary-orange font-semibold text-[24px] leading-9'>{'2308'}</div>
                <div className=' text-texts-normal font-medium text-[12px] leading-[18px]'>{'Assists'}</div>
                </div>
            </div>
          )
           
        }
      </div>
    </div>
  )
}
