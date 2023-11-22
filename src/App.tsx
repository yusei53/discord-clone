import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import { UseAppSelector } from "./app/hooks";

function App() {
  const user = UseAppSelector((state) => state.user);

  return (
    <>
      <div className="App">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
