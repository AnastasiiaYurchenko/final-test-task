import React, { useEffect, useState } from 'react';
import * as API from '../../API';
import { Loader } from 'components/Loader/Loader';
import {
  BottomWrapInfo,
  BtnLearnMore,
  CarItem,
  CarsList,
  Image,
  Text,
  TextModel,
  TextTitles,
  TopWrapInfo,
  WrapInfo,
  WrapTitles,
} from './Catalog.styled';

import NoImageCar from 'images/no-image-car.jpg';

export const ERROR_MSG = 'Something went wrong, please try again';

const Catalog = () => {
  //   return <div>Catalog</div>;
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(null);
        const trendingMovies = await API.getTrendingMovies();
        // console.log(trendingMovies);

        setCars(trendingMovies);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  //   console.log(movies);
  return (
    <CarsList>
      {error && <h1>{error} </h1>}
      {loading && <Loader />}
      {cars &&
        cars.map(car => {
          return (
            <CarItem key={car.id}>
              <Image
                // src={car.img ? car.img : { NoImageCar }}
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

              <BtnLearnMore type="button">Learn more</BtnLearnMore>

              {/* <Link key={movie.id} to={`movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link> */}
            </CarItem>
          );
        })}
    </CarsList>
  );
};

export default Catalog;
