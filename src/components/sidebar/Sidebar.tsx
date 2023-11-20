import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

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
        <div className="SidebarChannels">
          <div className="SidebarChannelsHeader">
            <div className="SidebarHeader">
              <ExpandMoreIcon />
              <h4>チャンネル</h4>
            </div>
            <AddIcon className="SidebarAddIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
