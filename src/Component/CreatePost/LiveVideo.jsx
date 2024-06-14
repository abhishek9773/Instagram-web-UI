import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Audience from "./Audience/Audience";

const LiveVideo = ({ isOpen, onClose }) => {
  const {
    isOpen: isOpenAudience,
    onOpen: onOpenAudience,
    onClose: oncloseAudience,
  } = useDisclosure();



  const handleOpenAudience = () => {
    onOpenAudience();
  };

  return (

      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="">
              <div className="flex flex-col items-center ">
                <div className="font-extrabold border-b-2 py-1  text-center w-full">
                  Live video
                </div>

                <div className="pt-[30px] mt-[20px] pb-2">
                  <div>
                    <svg
                      aria-label="Icon to represent live video broadcasts on Instagram"
                      class="x1lliihq x1n2onr6 x5n08af"
                      fill="currentColor"
                      height="96"
                      role="img"
                      viewBox="0 0 96 96"
                      width="96"
                    >
                      <title>
                        Icon to represent live video broadcasts on Instagram
                      </title>
                      <circle
                        cx="48"
                        cy="48"
                        fill="none"
                        r="47"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></circle>
                      <circle
                        cx="47.998"
                        cy="48.001"
                        fill="none"
                        r="7"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="1.9"
                      ></circle>
                      <path
                        d="M60.978 35.02a18.357 18.357 0 0 1 0 25.962m-25.961 0a18.357 18.357 0 0 1 0-25.961"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M66.927 29.073a26.77 26.77 0 0 1 0 37.857m-37.858 0a26.769 26.769 0 0 1 0-37.857"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className=" pb-[20px] mb-[20px] ">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl py-2">
                      Add live video details
                    </p>
                    <p className="text-sm text-slate-500 text-center font-medium px-[10px] pb-2">
                      Go live by connecting to your choice of streaming
                      software. To get started, add a title and select the
                      audience for your live video.
                    </p>
                    <div className="m-2">
                      <input
                        className="border bg-black/10 px-2 py-1 text-black m-2"
                        placeholder="Add a title... "
                      ></input>
                    </div>
                    <div
                      onClick={handleOpenAudience}
                      className="flex  items-center cursor-pointer  rounded-md hover:opacity-50 m-1"
                    >
                      <p>Audience</p>
                      <MdKeyboardArrowDown className="text-lg" />
                      <Audience
                        isOpen={isOpenAudience}
                        onClose={oncloseAudience}
                      />
                    </div>
                    <button className="bg-blue-500 text-white px-5 py-1 my-2 rounded-md">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
};

export default LiveVideo;
