import "./Sidebar.scss";

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
        <div className="SideBarTop">
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
