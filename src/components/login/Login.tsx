import { Button } from "@mui/material";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button>ログイン</Button>
    </div>
  );
};

export default Login;
