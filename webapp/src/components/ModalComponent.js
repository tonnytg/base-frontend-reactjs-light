import React from 'react';
import { useToggle } from '../hooks/useToggle';

const ModalComponent = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleIsOpen}>
        {isOpen ? 'Close Modal' : 'Open Modal'}
      </button>
      {isOpen && (
        <div className="modal">
          <p>This is the modal content!</p>
          <button onClick={toggleIsOpen}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
