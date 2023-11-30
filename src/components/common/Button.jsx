//import React, { useState } from 'react'
import PropTypes from 'prop-types'

const buttonType = {
  p: 'primary',
  s: 'secondary'
}

const Button = ({text, type, onClick}) => {
  //const [buttonState, setButtonState] = useState('Enabled');
  const disabledPrimaryButton = '';
  const disabledSecondaryButton = '';
  
  const commonStyle = 'rounded-[8px] w-fit h-[44px] px-5 pt-3 pb-[11px] text-[14px] leading-[21px]'
  const primaryButton = `${commonStyle} text-texts-heading bg-primary-orange hover:bg-primary-orangeHover`;
  const secondaryButton = ''
  const buttonStyle = type === buttonType.p ? primaryButton : secondaryButton;

  const handleOnClick = () => {
    onClick();
  }

  return (
    <button className={buttonStyle} onClick={handleOnClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
