import React from 'react';
import '../styles/global.css';

function ModalWindow({ onClose, title, description, children }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        {children}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;