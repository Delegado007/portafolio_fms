import React, { useState, useEffect } from "react";
import { ContainerModal, ButtonClose, Box } from "./styles";

export const ModalStatusMail = ({ status }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseModal = () => {
    const modal = document.querySelector('#container_modal');
    modal.className += " disable"
    setIsOpen(false);
  }
  useEffect(() => {
    const modal = document.querySelector('#container_modal');
    if (modal !== null) {
      if (isOpen) {
        modal.classList.remove("disable")
      }
    }
  }, [isOpen])
  return (
    <div>
      {status && (
        <ContainerModal id="container_modal">
          <Box>
            <ButtonClose onClick={() => { handleCloseModal() }}>
              X
            </ButtonClose>
            <h1>Enviado</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={45.701}
              height={45.7}
              style={{
                enableBackground: "new 0 0 45.701 45.7",
                fill: "#00E09D",
              }}
              xmlSpace="preserve"
            >
              <path d="M20.687 38.332a5.308 5.308 0 0 1-7.505 0L1.554 26.704A5.306 5.306 0 1 1 9.059 19.2l6.928 6.927a1.344 1.344 0 0 0 1.896 0L36.642 7.368a5.308 5.308 0 0 1 7.505 7.504l-23.46 23.46z" />
            </svg>
          </Box>
        </ContainerModal>
      )}
    </div>
  )
}