import PropTypes from 'prop-types';
import CarItem from '../CarItem/CarItem';
import { Item, List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => {
        return (
          <Item key={car.id}>
            <CarItem car={car} />
          </Item>
        );
      })}
    </List>
  );
};

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
