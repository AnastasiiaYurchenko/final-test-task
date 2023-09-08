import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
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

  const handleHeart = () => {
    console.log('click');
  };

  return (
    <div>
      <Image
        src={car.img || NoImageCar}
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
      <HeartImg onClick={handleHeart} />
      {/* <HeartImg
                  onClick={() => toggleFavorite(car)}
                  style={{
                    fill: isFavorite ? '#3470ff' : 'currentColor',
                    stroke: isFavorite ? '#3470ff' : 'currentColor',
                  }}
                /> */}
      {/* </CarItem> */}
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
