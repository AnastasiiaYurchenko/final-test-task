import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../API';
import { Loader } from 'components/Loader/Loader';
import { CarsList } from 'components/CarsList/CarsList';

import { Button } from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';

export const ERROR_MSG = 'Something went wrong, please try again';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const carName = searchParams.get('search') ?? '';
  // const priceTo = searchParams.get('price') ?? '';

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { carName, priceTo } = params;

  // const [searchName, setSearchName] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // const visibleCars = cars.filter(
  //   car =>
  //     car.make.toLowerCase().includes(carName.toLowerCase()) &&
  //     priceTo <= car.rentalPricereplace(/\D/g, '')
  // );

  const visibleCars = cars.filter(car => {
    const make = car.make ? car.make.toLowerCase() : ''; // Перевірка на існування та перетворення на рядок
    const rentalPrice = car.rentalPrice
      ? parseFloat(car.rentalPrice.replace(/\D/g, ''))
      : 0; // Перевірка на існування та вилучення нечислових символів

    // return make.includes(carName.toLowerCase()) && priceTo <= rentalPrice;
    return (
      (carName ? make.includes(carName.toLowerCase()) : true) &&
      (priceTo ? priceTo <= rentalPrice : true)
    );
  });

  // const updateQueryString = search => {
  //   const nextParams = search !== '' ? { search } : {};
  //   setSearchParams(nextParams);
  // };

  const updateQueryString = e => {
    setSearchParams({ carName: e.target.value, priceTo: e.target.value });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (carName === '') {
  //     return alert('Enter the brand');
  //   }
  //   const form = e.currentTarget;
  //   console.log(form);
  //   setSearchParams({
  //     carName: form.elements.carName.value,
  //     priceTo: form.elements.priceTo.value,
  //   });
  //   form.reset();
  // };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (carName === '' && priceTo === '') {
      return;
    }
    async function getAllCars() {
      try {
        setLoading(true);
        setError(null);
        const allCars = await API.getAllCars(page);

        if (page === 1) {
          // Якщо це перший запит, просто встановлюємо результати
          setCars(allCars);
        } else {
          // Якщо це наступний запит, додаємо результати до поточних
          setCars(prevCars => [...prevCars, ...allCars]);
        }
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getAllCars();
  }, [page, carName, priceTo]);

  // const handleFormSearch = searchName => {
  //   setSearchName(searchName);
  //   // setPage(1);
  //   setCars([]);
  // };

  return (
    <div>
      <SearchBar
        value={params}
        // onSubmit={handleSubmit}
        onChange={updateQueryString}
        // onSearch={handleFormSearch}
      />
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      <CarsList cars={visibleCars} />

      {cars && cars.length > 0 && <Button onClick={handleLoadMore} />}
    </div>
  );
};

export default Catalog;
