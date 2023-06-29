import { FC } from 'react';
import './SearchBar.css';
import { SearchBarProps } from '../../utils/types';

const SearchBar: FC<SearchBarProps> = ({ handleInput, doSearch }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      doSearch();
    }
  };

  return (
    <>
      <div className="search__container">
        <input
          className="search__input"
          type="search"
          name="searchValue"
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          placeholder="Enter search data..."
          autoComplete="off"
        />
        <button className="search__btn" type="submit" onClick={doSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
