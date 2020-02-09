import React, { useContext, useState } from "react";
import { useHttp } from "./hooks/http";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./layout/AppTheme";
import { Modal } from "react-bootstrap";

const AbilityModal = props => {
  //const [isLoading, fetchedData] = useHttp(props.modalData[2], []);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);

  let content = <p> </p>;

  //   if (!isLoading && fetchedData) {
  if (show) {
    content = (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalData[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Haho</Modal.Body>
        {/* <Modal.Body>{fetchedData.effect_entries[0].effect}</Modal.Body> */}
      </Modal>
    );
  }

  return content;
};

export default AbilityModal;
