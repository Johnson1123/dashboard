import "./Navbar.scss";
import Search from "../../Search/Search";

import image from "../../../asset/image/JRP.jpeg";

import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="left">
        <Search />
      </div>
      <div className="right flex">
        <span className="icon flex center p-text">
          <LanguageIcon />
          English
        </span>
        <span className="icon">
          <DarkModeOutlinedIcon />
        </span>
        <span className="icon">
          <NotificationsNoneIcon />
          <span className="label">1</span>
        </span>
        <span className="icon">
          <ChatBubbleOutlineIcon />
          <span className="label">3</span>
        </span>
        <span className="icon">
          <FormatListBulletedOutlinedIcon />
        </span>
        <span className="icon">
          <SettingsOutlinedIcon />
        </span>
      </div>
    </div>
  );
}

export function MobileNav() {
  return (
    <div className="mobileNav">
      <div className="Moleft flex">
        <img src={image} alt="" />
        <p className="username p-text">JRP Team</p>
      </div>
      <div className="Moright">
        <span>
          <MenuIcon />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
