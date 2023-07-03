import { FC } from 'react';
import { ModalProps } from '../../utils/types';
import './Modal.css';

const Modal: FC<ModalProps> = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
