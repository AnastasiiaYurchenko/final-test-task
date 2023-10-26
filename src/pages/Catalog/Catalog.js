import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../API';
import { Loader } from 'components/Loader/Loader';
import { CarsList } from 'components/CarsList/CarsList';

import { Button } from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';

export const ERROR_MSG = 'Something went wrong, please try again';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const carName = searchParams.get('search') ?? '';
  // const [searchName, setSearchName] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const visibleCars = cars.filter(car =>
    car.make.toLowerCase().includes(carName.toLowerCase())
  );

  const updateQueryString = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };
  // const [selectedCar, setSelectedCar] = useState(null);
  // const [favorites, setFavorites] = useState([]);

  // // Функція для додавання або видалення оголошення до/зі списку улюблених
  // const toggleFavorite = car => {
  //   if (favorites.includes(car.id)) {
  //     // Видалити оголошення зі списку улюблених
  //     const updatedFavorites = favorites.filter(favId => favId !== car.id);
  //     setFavorites(updatedFavorites);
  //   } else {
  //     // Додати оголошення до списку улюблених
  //     setFavorites([...favorites, car.id]);
  //   }
  // };

  // // Функція для перевірки, чи оголошення улюблене
  // const isFavorite = car => favorites.includes(car.id);
  // console.log(isFavorite());

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    // if (searchName === '') {
    //   return;
    // }
    async function getAllCars() {
      try {
        setLoading(true);
        setError(null);
        const allCars = await API.getAllCars(page);
        // console.log(trendingMovies);

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
  }, [page]);

  // const handleFormSearch = searchName => {
  //   setSearchName(searchName);
  //   // setPage(1);
  //   setCars([]);
  // };

  return (
    <div>
      <SearchBar
        value={carName}
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
