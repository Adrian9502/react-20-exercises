import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div className="bg-dark mb-5 p-3">
      <h1 className="text-primary mb-5">Custom Modal Popup</h1>
      <button className="btn btn-primary" onClick={handleToggleModalPopup}>
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          header={<div>What is Lorem Ipsum?</div>}
          body={
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              ipsam in non! Ipsum amet odio ut qui alias consequatur quo
              recusandae mollitia eum voluptate doloremque perferendis nam,
              dolor aspernatur temporibus.
            </p>
          }
          footer={<h4>2024 All right reserved.</h4>}
          onClose={handleToggleModalPopup}
        />
      )}
    </div>
  );
}
