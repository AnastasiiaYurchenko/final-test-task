import Modal from 'react-modal';
import { Close, ModalContent, Image } from './InfoModal.styled';

import NoImageCar from 'images/no-image-car.jpg';

const customStyles = {
  content: {
    position: 'relative',
    maxWidth: '541px',
    height: '752px',
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
        {/* <img src={car.img || NoImageCar} alt={car.make} width="461" /> */}
        <Image src={NoImageCar} alt="Make" width="461" />
        <Close onClick={onClose} />
        {/* <button onClick={onClose}>Close</button> */}
      </ModalContent>
    </Modal>
  );
};
