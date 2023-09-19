// import React, { useState, useEffect } from 'react';
// import React, { useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  BtnSearch,
  InputField,
  Label,
  SearchForm,
  WrapInputes,
} from './SearchBar.styled';
import { useMemo } from 'react';
// import * as API from '../../API';

export const ERROR_MSG = 'Something went wrong, please try again';

const SearchBar = ({ value, onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { carName, priceTo } = value;

  const handleSubmit = e => {
    e.preventDefault();
    if (carName === '') {
      return alert('Enter the brand');
    }
    const form = e.currentTarget;
    console.log(form);
    setSearchParams({
      carName: form.elements.carName.value,
      priceTo: form.elements.priceTo.value,
    });
    form.reset();
  };

  // const handleCarNameChange = e => {
  //   // Оновлення carName при зміні значення поля
  //   const newValue = e.target.value; // Отримати нове значення поля вводу
  //   // Оновити carName з новим значенням
  //   setSearchParams(prevParams => ({
  //     ...prevParams,
  //     carName: newValue,
  //   }));
  // };

  // const handlePriceToChange = e => {
  //   // Оновлення priceTo при зміні значення поля
  //   const newValue = e.target.value;
  //   setSearchParams(prevParams => ({
  //     ...prevParams,
  //     priceTo: newValue,
  //   }));
  // };
  //   const [searchName, setSearchName] = useState('');
  //   const [searchedMovies, setSearchedMovies] = useState([]);

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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (carName === '') {
  //     return alert('Enter the brand');
  //   }
  //   const form = e.currentTarget;
  //   setSearchParams({
  //     carName: form.elements.username.value,
  //     priceTo: form.elements.username.value,
  //   });
  //   form.reset();
  // };

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
      <SearchForm
        // onSubmit={onSubmit}
        // onSubmit={handleSubmit}
        onChange={onChange}
      >
        <Label>
          Car brand
          <InputField
            type="text"
            name="carName"
            autoComplete="off"
            autoFocus
            placeholder="Enter the text"
            // value={carName}
            // onChange={handleCarNameChange}
            //   onChange={handleSearchNameChange}
            // onChange={e => onChange(e.target.value)}
          />
        </Label>

        <Label>
          Price/ 1 hour
          <InputField
            type="text"
            name="priceTo"
            autoComplete="off"
            autoFocus
            placeholder="To $"
            // value={priceTo}
            // onChange={handlePriceToChange}
            //   onChange={handleSearchNameChange}
            // onChange={e => onChange(e.target.value)}
          />
        </Label>

        <Label>
          Сar mileage / km
          <WrapInputes>
            <InputField
              type="text"
              // name="kmFrom"
              autoComplete="off"
              autoFocus
              placeholder="From"
              //   value={value}
              //   onChange={handleSearchNameChange}
              // onChange={e => onChange(e.target.value)}
            />
            <InputField
              type="text"
              // name="kmTo"
              autoComplete="off"
              autoFocus
              placeholder="To"
              //   value={value}
              //   onChange={handleSearchNameChange}
              // onChange={e => onChange(e.target.value)}
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
