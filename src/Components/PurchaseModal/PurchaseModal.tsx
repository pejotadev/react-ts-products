import React from 'react';
import { PurchaseList } from '../PurchaseList/PurchaseList';
import Modal from '../Utils/Modal';

interface PurchaseModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isModalOpen, toggleModal }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
      <h2>Suas Compras</h2>
      <section>
        <PurchaseList />
      </section>
    </Modal>
  );
}
