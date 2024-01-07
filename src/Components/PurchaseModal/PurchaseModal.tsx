import { PurchaseList } from '../PurchaseList/PurchaseList';
import Modal from '../Utils/Modal'

export const PurchaseModal = ({isModalOpen, toggleModal} : {
  isModalOpen: boolean;
  toggleModal: () => void;
}) => {
  return (
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Suas Compras</h2>
        <div>
          <PurchaseList />
        </div>
    </Modal>
  )
}
