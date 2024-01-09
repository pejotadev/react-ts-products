import React, { ReactNode } from 'react';
import './Modal.css'; // Importando o CSS

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
