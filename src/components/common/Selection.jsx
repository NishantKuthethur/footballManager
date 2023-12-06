
import PropTypes from 'prop-types'

const Selection = ({selected, position}) => {
  return (
    <div className=''>
        <select>
            <option selected>{selected}</option>
        </select>  
    </div>
  )
}

Selection.propTypes = {

}

export default Selection
