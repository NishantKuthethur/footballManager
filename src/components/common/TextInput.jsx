import { useState } from 'react';
import PropTypes from 'prop-types'

const TextInput = ({
    type ='text',
    initialValue,
    onChange,
    onBlur,
    placeholder,
    disabled,
    autoFocus
}) => {
  
  const [value, setValue] = useState(initialValue);
  const isFilled = value.length > 0;
  const dynamicStyle = disabled ? "" : (isFilled ? "text-texts-heading" : "text-texts-muted");
  const dynamicClass = `form-control block bg-transparent h-fit w-fit px-4 py-[12px] rounded-[8px] border border-solid border-borders-default text-[14px] leading-[21px] focus:outline-none focus:border focus:border-solid focus:border-borders-default ${dynamicStyle}`;
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if(onChange){
        onChange(e);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange} // Use internal handleChange
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      className={dynamicClass}
      autoFocus={autoFocus}
   />
  )
}

TextInput.propTypes = {
    type: PropTypes.string,
    initialValue: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool
}

export default TextInput
