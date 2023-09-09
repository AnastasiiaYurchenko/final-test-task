import { CarsList } from 'components/CarsList/CarsList';
import React from 'react';

const Favorites = () => {
  const getCars = () => {
    const favoriteCars = localStorage.getItem('favoriteCars');
    if (favoriteCars !== null) {
      return JSON.parse(favoriteCars);
    } else {
      return [];
    }
  };

  const favoriteCars = getCars();

  return (
    <div>
      <CarsList cars={favoriteCars} />
    </div>
  );
};

export default Favorites;
