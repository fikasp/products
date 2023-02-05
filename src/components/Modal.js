import React from "react";

export default function Modal ({ modalRef, setShowModal }) {

  const handleCloseModal = e => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div
      className="modal"
      onKeyDown={handleCloseModal}
      ref={modalRef}
      tabIndex="1"
      >
      <div className="modal-content">
        <p>Please enter a product name and price</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};
