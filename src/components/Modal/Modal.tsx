import { FC } from 'react';
import { IModalProps } from '../../types';
import './Modal.scss';

const Modal: FC<IModalProps> = ({
  text,
  iconTitle,
  iconStyles,
  btnStyles,
  closeModal,
}) => {
  return (
    <div className="modal-container">
      <div className="modal-subcontainer">
        <span className="icon material-symbols-outlined" style={iconStyles}>
          {iconTitle}
        </span>
        <p className="notification">{text}</p>
        <button className="continueBtn" style={btnStyles} onClick={closeModal}>
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Modal;
