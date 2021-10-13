import React from 'react';
import ReactModal from 'react-modal';
import './modal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal = ({ children, open, closeModal, openModal }) => {
  return (
    <ReactModal
      isOpen={open}
      onAfterOpen={() => {}}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName='overlay'
    >
      <div>{children}</div>
    </ReactModal>
  );
};
