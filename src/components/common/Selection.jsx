
import PropTypes from 'prop-types'

const Selection = ({selected, options}) => {
  return (
    <div className={`w-full`}>
        {options && options.length > 0 ? (
          <select value={selected}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
          ) :
          (
            <select className='custom-select cursor-pointer w-full h-[44px] px-4 pt-3 py-[11px] rounded-lg bg-transparent border border-borders-default appearance-none outline-none text-[14px] leading-[21px]'>
              <option>{selected}</option>
            </select>
          )
        }  
    </div>
  )
}

Selection.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.array
}

export default Selection
