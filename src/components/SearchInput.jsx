
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '../store/store';
import { useState } from 'react';

const SearchInputState = {
  Enabled: "ENABLED",
  Typing: "TYPING",
  Searched: "SEARCHED"
};

const SearchInput = () => {

  const { setSearchValue } = useStore();
  const [searchState, setSearchState] = useState(SearchInputState.Enabled);
  const [inputValue, setInputValue] = useState('');

  const updateSearch = (value) => {
    setSearchValue(value);
    if(value === '') setInputValue('');
    setSearchState(value ? SearchInputState.Searched : SearchInputState.Enabled);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchState(value ? SearchInputState.Typing : SearchInputState.Enabled);
    if (value.length === 0) {
      updateSearch('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateSearch(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      updateSearch('');
    }
  };

  return (
    <form onSubmit={handleSearch}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[14px] h-[14px] text-texts-muted "/>
        <input 
          type="text" 
          id="default-search" 
          value={inputValue}
          className={`block w-full pl-10 pr-20  py-3 bg-transparent
          border border-solid border-borders-default 
          rounded-lg outline-none focus:bg-transparent 
          ${searchState===SearchInputState.Enabled ? "placeholder-texts-muted text-texts-muted" : (searchState===SearchInputState.Typing ? "text-texts-normal" : "text-texts-heading")}`} 
          placeholder="Find Player" 
          autoComplete='off'
          spellCheck='false'
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        {searchState === SearchInputState.Typing && 
          <div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 py-2 
                     text-primary-orange cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </div>
        }
        {searchState === SearchInputState.Searched && (
          <FontAwesomeIcon
            className='absolute right-4 top-1/2 transform -translate-y-1/2 py-2 cursor-pointer text-texts-muted'
            icon={faClose} 
            onClick={() => updateSearch('')} 
           />
        )}
    </div>
    </form>
  );
}


export default SearchInput
