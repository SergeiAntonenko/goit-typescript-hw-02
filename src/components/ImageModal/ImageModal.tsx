import React from "react";
import Modal from "react-modal";

import css from "./ImageModal.module.css";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<Props> = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel=""
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
          overflow: "hidden",
          padding: 0,
          borderRadius: "10px",
        },
      }}
    >
      <img className={css.modalImage} src={imageUrl} alt="image" />
    </Modal>
  );
};

export default ImageModal;
