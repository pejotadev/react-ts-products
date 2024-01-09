import React from 'react';
import { PurchaseList } from '../PurchaseList/PurchaseList';
import Modal from '../Utils/Modal';
import './PurchaseModal.css';

interface PurchaseModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isModalOpen, toggleModal }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
      <div className="purchase-modal">
        <h2>Suas Compras</h2>
        <section>
          <PurchaseList />
        </section>
      </div>
    </Modal>
  );
}
