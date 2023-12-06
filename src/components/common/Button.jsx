//import React, { useState } from 'react'
import PropTypes from 'prop-types'

const buttonType = {
  p: 'primary',
  s: 'secondary'
}

const Button = ({text, type, onClick, placementStyle, isImportButton, importError, isDisabled = false ,isDanger = false}) => {
  
  
  const commonStyle = 'rounded-[8px] w-fit h-[44px] px-5 pt-3 pb-[11px] text-[14px] leading-[21px] font-medium';
  const primayColor = isDanger ? 'bg-primary-red' :'bg-primary-orange'
  const primaryButton = `${commonStyle} ${isDisabled ? 'bg-defaults-2 text-texts-disabled': `${primayColor} hover:bg-primary-orangeHover text-texts-heading`} `;
  const secondaryButton = `${commonStyle}  ${isImportButton ? 'border-l' : 'border'} ${importError ? 'border-primary-red' : 'border-borders-default'} text-texts-normal hover:text-texts-heading`;
  const buttonStyle = type === buttonType.p ? primaryButton : secondaryButton;

  const handleOnClick = () => {
    onClick();
  }

  return (
    <button className={buttonStyle +' '+ placementStyle} onClick={handleOnClick} disabled={isDisabled}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  placementStyle: PropTypes.string,
  isImportButton: PropTypes.bool,
  importError: PropTypes.string,
  isDanger: PropTypes.bool
}

export default Button
