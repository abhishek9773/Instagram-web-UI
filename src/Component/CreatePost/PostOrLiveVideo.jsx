import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const PostOrLiveVideo = ({ isOpen  }) => {
  return (
    <div>
      <Menu>
        {isOpen && (
          <>
            <MenuList>
              <MenuItem onClick={() => {}} className="by-1 bx-2">
                <div className="flex justify-between items-center">
                  <p>Post</p>
                  <svg
                    aria-label="Post"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Post</title>
                    <path d="m18.509 14.757-4.285-2.474a.857.857 0 0 0-1.286.743v4.948a.857.857 0 0 0 1.286.742l4.285-2.474a.857.857 0 0 0 0-1.485ZM5.225 3.977a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM19.5 7.5h-3v-3a4.004 4.004 0 0 0-4-4h-8a4.004 4.004 0 0 0-4 4v8a4.004 4.004 0 0 0 4 4h3v3a4.004 4.004 0 0 0 4 4h8a4.004 4.004 0 0 0 4-4v-8a4.004 4.004 0 0 0-4-4Zm-12 7h-3a1.997 1.997 0 0 1-1.882-1.349l2.607-2.607L7.5 12.819Zm.23-4.28L6.41 8.9a1.679 1.679 0 0 0-2.37 0L2.5 10.44V4.5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v3h-3a3.992 3.992 0 0 0-3.77 2.72ZM21.5 19.5a2.003 2.003 0 0 1-2 2h-8a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2Z"></path>
                  </svg>
                </div>
              </MenuItem>
              <MenuItem onClick={() => {}} className="by-1 bx-2">
                <div className="flex items-center justify-between ">
                  <p> Live Video</p>

                  <svg
                    aria-label="Live video"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Live video</title>
                    <path
                      d="M8.995 7.584a1 1 0 0 0-1.414.001 6.258 6.258 0 0 0 0 8.84 1 1 0 1 0 1.414-1.415 4.257 4.257 0 0 1 0-6.01 1 1 0 0 0 0-1.416Zm-5.994 4.42a8.94 8.94 0 0 1 2.636-6.363 1 1 0 0 0-1.414-1.414 11 11 0 0 0 0 15.556 1 1 0 1 0 1.414-1.414A8.941 8.941 0 0 1 3 12.005Zm16.777-7.778a1 1 0 1 0-1.414 1.414 9.001 9.001 0 0 1 0 12.729 1 1 0 1 0 1.414 1.414 11 11 0 0 0 0-15.557ZM16.42 7.584A1 1 0 1 0 15.006 9a4.257 4.257 0 0 1 0 6.01 1 1 0 1 0 1.414 1.415 6.258 6.258 0 0 0 0-8.84ZM12 10.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  );
};

export default PostOrLiveVideo;
