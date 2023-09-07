import React, { useEffect, useState } from 'react';
import * as API from '../../API';
import { Loader } from 'components/Loader/Loader';
// import {
//   BottomWrapInfo,
//   BtnLearnMore,
//   CarItem,
//   // CarsList,
//   Image,
//   Text,
//   TextModel,
//   TextTitles,
//   TopWrapInfo,
//   WrapInfo,
//   WrapTitles,
//   HeartImg,
// } from './Catalog.styled';
import { CarsList } from 'components/CarsList/CarsList';

import { Button } from 'components/Button/Button';
// import { InfoModal } from 'components/InfoModal/InfoModal';

export const ERROR_MSG = 'Something went wrong, please try again';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
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
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(null);
        const trendingMovies = await API.getTrendingMovies(page);
        // console.log(trendingMovies);

        if (page === 1) {
          // Якщо це перший запит, просто встановлюємо результати
          setCars(trendingMovies);
        } else {
          // Якщо це наступний запит, додаємо результати до поточних
          setCars(prevCars => [...prevCars, ...trendingMovies]);
        }
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, [page]);
  //   console.log(movies);
  return (
    <div>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      <CarsList cars={cars} />

      {cars && cars.length > 0 && <Button onClick={handleLoadMore} />}
      {/* <InfoModal
        isOpen={selectedCar !== null}
        onClose={() => setSelectedCar(null)}
        car={selectedCar}
      /> */}
    </div>
  );
};

export default Catalog;
