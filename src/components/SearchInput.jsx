
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

const SearchInput = () => {
  return (
    <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[14px] h-[14px] text-texts-muted "/>
        <input type="text" id="default-search" className="block w-full px-10 py-3 bg-transparent border border-solid border-borders-default rounded-lg outline-none focus:bg-transparent" placeholder="Find Player" autoComplete='off' required/>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 py-2 text-primary-orange">Search</div>
    </div>
    </form>
  );
}

SearchInput.propTypes = {

}

export default SearchInput
