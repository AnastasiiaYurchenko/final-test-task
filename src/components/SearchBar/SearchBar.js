// import React, { useState, useEffect } from 'react';
import React from 'react';

// import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  BtnSearch,
  InputField,
  Label,
  SearchForm,
  WrapInputes,
} from './SearchBar.styled';
// import * as API from '../../API';

export const ERROR_MSG = 'Something went wrong, please try again';

const SearchBar = ({ value, onChange }) => {
  //   const [searchName, setSearchName] = useState('');
  //   const [searchedMovies, setSearchedMovies] = useState([]);
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   const search = searchParams.get('search');

  //   const handleSearchNameChange = e => {
  //     // setSearchName(e.currentTarget.value.toLowerCase());
  //     const searchQueryValue = e.target.value;

  //     if (searchQueryValue === '') {
  //       return setSearchParams({});
  //     }
  //     setSearchParams({ search: searchQueryValue });
  //   };

  const handleSubmit = e => {
    e.preventDefault();

    if (value === '') {
      return alert('Enter the brand');
    }
    // onSearch(searchName);
    // setSearchName('');

    const form = e.currentTarget;
    // console.log(form.elements);
    // console.log(search);
    // console.log(searchedMovies);
    // setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  //   useEffect(() => {
  //     if (search === '' || search === null) return;

  //     async function SearchMovies() {
  //       try {
  //         setLoading(true);
  //         setError(null);
  //         const searchedMovies = await API.SearchMovies(search);
  //         console.log(searchedMovies);

  //         setSearchedMovies(searchedMovies);
  //       } catch (error) {
  //         setError(ERROR_MSG);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     SearchMovies();
  //   }, [search]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <Label>
          Car brand
          <InputField
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Enter the text"
            value={value}
            //   onChange={handleSearchNameChange}
            onChange={e => onChange(e.target.value)}
          />
        </Label>

        <Label>
          Price/ 1 hour
          <InputField
            type="text"
            name="price"
            autoComplete="off"
            autoFocus
            placeholder="To $"
            // value={value}
            //   onChange={handleSearchNameChange}
            onChange={e => onChange(e.target.value)}
          />
        </Label>

        <Label>
          Сar mileage / km
          <WrapInputes>
            <InputField
              type="text"
              name="kmFrom"
              autoComplete="off"
              autoFocus
              placeholder="From"
              //   value={value}
              //   onChange={handleSearchNameChange}
              onChange={e => onChange(e.target.value)}
            />
            <InputField
              type="text"
              name="kmTo"
              autoComplete="off"
              autoFocus
              placeholder="To"
              //   value={value}
              //   onChange={handleSearchNameChange}
              onChange={e => onChange(e.target.value)}
            />
          </WrapInputes>
        </Label>

        <BtnSearch type="submit">Search</BtnSearch>
      </SearchForm>
    </div>
  );
};

export default SearchBar;

// Searchbar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };
