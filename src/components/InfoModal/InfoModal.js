import Modal from 'react-modal';
import {
  Close,
  ModalContent,
  Image,
  TextTitles,
  TextModel,
  WrapInfo,
  Text,
  TopWrapInfo,
  BottomWrapInfo,
  Description,
  Title,
  ConditionsWrap,
  Condition,
  ConditionAccent,
  BtnRental,
} from './InfoModal.styled';

import NoImageCar from 'images/no-image-car.jpg';

const customStyles = {
  content: {
    position: 'relative',
    maxWidth: '541px',
    height: '752px',
    padding: '40px',
    borderRadius: '24px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const InfoModal = ({ isOpen, car, onClose }) => {
  console.log(car);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <Image src={car.img || NoImageCar} alt={car.make} width="461" />
        <TextTitles>
          {car.make} <TextModel>{car.model},</TextModel> {car.year}
        </TextTitles>

        <WrapInfo>
          <TopWrapInfo>
            <Text>{car.address.split(',')[1]}</Text>
            <Text>{car.address.split(',')[2]}</Text>
            <Text>id:{car.id}</Text>
            <Text>Year:{car.year}</Text>
            <Text> Type:{car.type} </Text>
          </TopWrapInfo>
          <BottomWrapInfo>
            <Text> Fuel Consumption:{car.fuelConsumption} </Text>
            <Text>Engine Size:{car.engineSize}</Text>
          </BottomWrapInfo>
        </WrapInfo>

        <Description>{car.description}</Description>

        <Title>Accessories and functionalities:</Title>
        <TopWrapInfo>
          {car.accessories.map((accessory, index) => (
            <Text key={index}>{accessory}</Text>
          ))}
        </TopWrapInfo>
        <BottomWrapInfo>
          {car.functionalities.map((functionality, index) => (
            <Text key={index}>{functionality}</Text>
          ))}
        </BottomWrapInfo>

        <Title>Rental Conditions: </Title>
        <ConditionsWrap>
          {car.rentalConditions.split('\n').map((condition, index) => (
            <Condition key={index}>{condition}</Condition>
          ))}
          <Condition>
            Mileage:
            <ConditionAccent>
              {parseInt(car.mileage).toLocaleString('en-US')}
            </ConditionAccent>
          </Condition>
          <Condition>
            Price: <ConditionAccent>{car.rentalPrice}</ConditionAccent>
          </Condition>
        </ConditionsWrap>

        <BtnRental href="tel:+380730000000">Rental car</BtnRental>

        <Close onClick={onClose} />
      </ModalContent>
    </Modal>
  );
};
