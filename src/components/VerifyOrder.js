import React, { useState } from "react";
import Modal from "react-modal";
// import { Avatar } from "@mui/material";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import "./styles.css";
import ReactCodeInput from "react-code-input";


function VerifyOrder() {
  const [value, setValue] = useState([]);
  const test = (value) => {
    setValue(value);
    console.log("vakue", value.split(""));
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "18px",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h4>Enter code to confirm order</h4>
          <ReactCodeInput
            onChange={test}
            type="text"
            values={value}
            fields={6}
            className="Tes"
            id="input"
          />
          <br></br>
          <br></br>
          <button onClick={closeModal} className="t-btn">
            Confirm
          </button>
        </Modal>
      </div>

      {/* </Modal> */}
    </div>
  );
}

export default VerifyOrder;
