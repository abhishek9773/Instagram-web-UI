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
  AiOutlineInstagram,
  AiFillInstagram,
} = require("react-icons/ai");
const { CgProfile } = require("react-icons/cg");
const { RiVideoFill, RiVideoLine } = require("react-icons/ri");

const desine = "text-3xl p-3px";
export const mainu = [
  {
    title: "Home",
    icon: <AiOutlineHome className={desine} />,
    activeIcon: <AiFillHome className={desine} />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className={desine} />,
    activeIcon: <AiOutlineSearch className={desine} />,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className={desine} />,
    activeIcon: <AiFillCompass className={desine} />,
  },
  {
    title: "Reels",
    icon: <RiVideoLine className={desine} />,
    activeIcon: <RiVideoFill className={desine} />,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className={desine} />,
    activeIcon: <AiFillMessage className={desine} />,
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className={desine} />,
    activeIcon: <AiFillHeart className={desine} />,
  },
  {
    title: "PostCreate",
    icon: <AiOutlinePlusCircle className={desine} />,
    activeIcon: <AiFillPlusCircle className={desine} />,
  },
  {
    title: "Profile",
    icon: <CgProfile className={desine} />,
    activeIcon: <CgProfile className={desine} />,
  },
];
