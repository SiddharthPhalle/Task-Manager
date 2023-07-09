import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalComponent = (props) => {
  return (
    <div>
      <Modal isOpen={props.isModalOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
        <ModalBody>{props.description}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.submitHandler}>
            {props.successButtonText}
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
