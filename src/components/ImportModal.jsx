import React from 'react'
import PropTypes from 'prop-types'
import Button from './common/Button'
import { useStore } from '../store/store'

const ImportModal = () => {
  const {setShowModal} = useStore()
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-50' onClick={() => setShowModal(false)}></div>
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-[8px] border-borders-default bg-neutral-2 shadow-modal'>
      <Button text='Import' type='primary'/>
    </div>
    </>
  )
}

ImportModal.propTypes = {

}

export default ImportModal
