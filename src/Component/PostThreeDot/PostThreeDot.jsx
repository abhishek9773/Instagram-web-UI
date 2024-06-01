import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const style =
  "border-b hover:bg-slate-200 cursor-pointer border-gray-500/10 py-2 rounded-md font-bold ";
function PostThreeDot({ isOpen, onClose }) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="">
              <div>
                <div className="text-center ">
                  <p className={`${style} text-red-500 `}>Repost</p>
                  <p className={`${style} text-red-500`}>Unfollow</p>
                  <p className={`${style}`}>Add to favourites</p>
                  <p className={`${style}`}>Go to post</p>
                  <p className={`${style}`}>Share to..</p>
                  <p className={`${style}`}>Copy link</p>
                  <p className={`${style}`}>Embed</p>
                  <p className={`${style}`}>About this account</p>
                  <p className="py-2 rounded-md font-bold">cancle</p>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostThreeDot;
