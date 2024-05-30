const {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineMessage,
  AiFillMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} = require("react-icons/ai");
const { CgProfile } = require("react-icons/cg");
const { RiVideoFill, RiVideoLine } = require("react-icons/ri");

const desine = "text-2xl mr-5";
export const mainu = [
  {
    title: "Home",
    icon: <AiOutlineHome className={desine} />,
    inactiveIcon: <AiFillHome className={desine} />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className={desine} />,
    inactiveIcon: <AiOutlineSearch className={desine} />,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className={desine} />,
    inactiveIcon: <AiFillCompass className={desine} />,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className={desine} />,
    inactiveIcon: <RiVideoFill className={desine} />,
  },
  {
    title: "message",
    icon: <AiOutlineMessage className={desine} />,
    inactiveIcon: <AiFillMessage className={desine} />,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className={desine} />,
    inactiveIcon: <AiFillHeart className={desine} />,
  },
  {
    title: "Post",
    icon: <AiOutlinePlusCircle className={desine} />,
    inactiveIcon: <AiFillPlusCircle className={desine} />,
  },
  {
    title: "Profile",
    icon: <CgProfile className={desine} />,
    inactiveIcon: <CgProfile className={desine} />,
  },
];
