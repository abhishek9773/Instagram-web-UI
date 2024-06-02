import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";

const Audience = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={onClose} size="sm" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div>
            <div className=" text-center">
              <div className="border-b-2 hover:bg-gray-300 rounded-md py-1">
                Public
              </div>
              <div className="border-b-2 hover:bg-gray-300 rounded-md py-1 ">
                practice
              </div>
              <div className="hover:bg-gray-300 rounded-md py-1">Cancel</div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Audience;
