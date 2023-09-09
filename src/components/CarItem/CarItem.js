// import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
import {
  Image,
  WrapTitles,
  TextTitles,
  TextModel,
  WrapInfo,
  Text,
  TopWrapInfo,
  BottomWrapInfo,
  BtnLearnMore,
  HeartImg,
} from './CarItem.styled';

import NoImageCar from 'images/no-image-car.jpg';
import { InfoModal } from 'components/InfoModal/InfoModal';

const CarItem = ({ car }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи автомобіль є у списку улюблених при завантаженні компонента
    const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
    setIsFavorite(favoriteCars.some(favoriteCar => favoriteCar.id === car.id));
  }, [car.id]);

  // Функція для додавання автомобіля в LocalStorage та оновлення стану isFavorite
  const handleAddToFavorite = () => {
    addToLocalStorage(car);
    setIsFavorite(true); // Встановлюємо isFavorite в true при додаванні
  };

  // Функція для видалення автомобіля з LocalStorage та оновлення стану isFavorite
  const handleRemoveFromFavorite = () => {
    removeFromLocalStorage(car);
    setIsFavorite(false); // Встановлюємо isFavorite в false при видаленні
  };

  // Функція для додавання автомобіля в LocalStorage
  const addToLocalStorage = car => {
    const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
    favoriteCars.push(car);
    localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
  };

  // Функція для видалення автомобіля з LocalStorage
  const removeFromLocalStorage = car => {
    const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
    const updatedFavoriteCars = favoriteCars.filter(
      favoriteCar => favoriteCar.id !== car.id
    );
    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
  };

  // const handleHeart = () => {
  //   console.log('click Heart');
  //   // Перевіряємо, чи автомобіль вже є у вибраному
  //   const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
  //   const isCarInFavorites = favoriteCars.some(
  //     favoriteCar => favoriteCar.id === car.id
  //   );

  //   if (isCarInFavorites) {
  //     // Якщо автомобіль вже у вибраному, видаляємо його
  //     removeFromLocalStorage(car);
  //   } else {
  //     // Якщо автомобіль не у вибраному, додаємо його
  //     addToLocalStorage(car);
  //   }
  // };

  return (
    <div>
      <Image
        src={car.img || car.photoLink || NoImageCar}
        alt={car.make}
        width="274px"
        height="268px"
      ></Image>
      <WrapTitles>
        <TextTitles>
          {car.make} <TextModel>{car.model},</TextModel> {car.year}
        </TextTitles>
        <TextTitles>{car.rentalPrice}</TextTitles>
      </WrapTitles>

      <WrapInfo>
        <TopWrapInfo>
          <Text>{car.address.split(',')[1]}</Text>
          <Text>{car.address.split(',')[2]}</Text>
          <Text>{car.rentalCompany}</Text>
        </TopWrapInfo>
        <BottomWrapInfo>
          <Text> {car.type} </Text>
          <Text>{car.id}</Text>
          <Text>{car.accessories[0]}</Text>
        </BottomWrapInfo>
      </WrapInfo>

      <BtnLearnMore
        type="button"
        onClick={() => {
          console.log('click', car, selectedCar);
          return setSelectedCar(car);
        }}
      >
        Learn more
      </BtnLearnMore>
      {/* <HeartImg onClick={handleHeart} /> */}
      <HeartImg
        onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite}
        data-isfavorite={isFavorite}
      />

      {selectedCar && (
        <InfoModal
          car={selectedCar}
          isOpen={selectedCar !== null}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default CarItem;

CarItem.propTypes = {
  car: PropTypes
    .shape
    // {
    // id: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // time: PropTypes.number.isRequired,
    // servings: PropTypes.number.isRequired,
    // calories: PropTypes.number.isRequired,
    // image: PropTypes.string.isRequired,
    // difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    // }
    ().isRequired,
};
