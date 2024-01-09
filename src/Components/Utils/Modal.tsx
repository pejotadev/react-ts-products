import React, { ReactNode, CSSProperties } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.closeDiv}>
          <button onClick={onClose} style={styles.closeButton}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    maxHeight: '80%',
    overflowY: 'auto',
    zIndex: 9999,
  },
  closeButton: {
    display: 'block',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  closeDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default Modal;
