import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { UseAppSelector } from "../../app/hooks";
import useCollection from "../../hooks/useCollection";

const Sidebar = () => {
  const user = UseAppSelector((state) => state.user);
  const { documents: channels } = useCollection("channels");

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="sidebarIcon">
          <img src="./discordIcon.png" alt="icon" />
        </div>
        <div className="sidebarIcon">
          <img src="./logo192.png" alt="icon" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>チャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 8)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
