import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="SidebarLeft">
        <div className="SidebarIcon">
          <img src="./logo192.png" alt="icon" />
        </div>
        <div className="SidebarIcon">
          <img src="./logo192.png" alt="icon" />
        </div>
      </div>
      <div className="SidebarRight">
        <div className="SidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
