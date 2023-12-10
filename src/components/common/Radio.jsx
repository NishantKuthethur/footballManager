import PropTypes from 'prop-types'

const Radio = ({name, value, checked, onChange}) => {
  const classes = checked ? 'border-4 border-primary-orange' : 'border border-borders-default';
  return (
    <input 
        type='radio' 
        name={name}
        value={value} 
        checked={checked} 
        onChange={onChange} 
        className={`appearance-none w-4 h-4 rounded-full bg-neutral-2 ${classes}`}
    />
  )
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Radio
