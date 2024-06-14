import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
const {
  useDisclosure,
  Drawer,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  DrawerFooter,
} = require("@chakra-ui/react");

function Search({ isOpen, onClose }) {
  const firstField = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="mt-10 ml-3 mr-3">
            <div className="text-2xl font-bold ">Search</div>
            <div className="mb-4 border-t-2 ">
              <input
                className="outline-1 bg-gray-400/50  placeholder-black p-2 rounded-md w-full "
                ref={firstField}
                placeholder="search"
              />
            </div>
            <hr className="h-3 font-bold" />
            <div className="flex flex-row justify-between font-bold items-center">
              <p>Recent</p>
              <p className="text-blue-500"> Select all</p>
            </div>

            {[1, 1, 1, 1, 1].map((item) => (
              <div className="flex flex-row justify-between items-center m-2">
                <div className="flex flex-row gap-1 cursor-pointer">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="cursor-pointer">
                    <p className="font-bold text-md">abhishke9773i</p>
                    <p className="opacity-50 text-sm">Abhishek kumar</p>
                  </div>
                </div>
                <div>
                  <RxCross2 className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Search;
