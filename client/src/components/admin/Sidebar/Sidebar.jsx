import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ViewListIcon from "@mui/icons-material/ViewList";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PortraitIcon from "@mui/icons-material/Portrait";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import image from "../../../asset/image/JRP.jpeg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigate = (n) => navigate(n);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper flex column">
        <div className="top flex center">
          <img src={image} alt="" />
          <p className="p-text">JRP TEAM</p>
        </div>
        <div className="center">
          <p className="category-text p-text">MAIN</p>
          <ul>
            <li
              className="list-item"
              onClick={() => handleNavigate("dashboard")}
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </ul>
          <p className="category-text p-text">LIST</p>
          <ul>
            <li className="list-item">
              <PersonIcon />
              <span>Users</span>
            </li>
            <li className="list-item">
              <InventoryIcon />
              <span>Products</span>
            </li>
            <li className="list-item">
              <ViewListIcon />
              <span>Orders</span>
            </li>
            <li className="list-item">
              <ViewListIcon />
              <span>Orders</span>
            </li>
          </ul>
          <p className="category-text p-text">USEFUL</p>
          <ul>
            <li className="list-item">
              <EqualizerIcon />
              <span>Stats</span>
            </li>
            <li className="list-item">
              <NotificationsNoneIcon />
              <span>notifications</span>
            </li>
          </ul>
          <p className="category-text p-text">SERVICE</p>
          <ul>
            <li className="list-item">
              <NotificationsNoneIcon />
              <span>System Health</span>
            </li>
            <li className="list-item">
              <NotificationsNoneIcon />
              <span>Logs</span>
            </li>
            <li className="list-item">
              <SettingsIcon />
              <span>Settings</span>
            </li>
          </ul>
          <p className="category-text p-text">USER</p>
          <ul>
            <li className="list-item">
              <PortraitIcon />
              <span>Profile</span>
            </li>
            <li className="list-item">
              <LogoutIcon />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p className="category-text p-text">THEME</p>
          <div className="flex">
            <span className="list-item them"></span>
            <span className="list-item theme"></span>
            <span className="list-item theme"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
