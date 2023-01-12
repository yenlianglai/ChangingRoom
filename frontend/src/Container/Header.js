import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "../css/button.css";

const Header = () => {
  return (
    <div className="HeaderContainer" style={HeaderContainerStyle}>
      <div imgContainer style={ImgContainerStyle}>
        <img
          src={"/img/logo.png"}
          style={{
            width: "150%",
            aspectRatio: "1/2",
            position: "absolute",
            top: "-9999px",
            bottom: "-9999px",
            left: "-9999px",
            right: "-9999px",
            margin: "auto",
          }}
        />
      </div>

      <div className="HeaderNavbar" style={HeaderNavbarStyle}>
        <button className="HeaderButton">首頁</button>
        <button className="HeaderButton">品牌</button>
        <button className="HeaderButton">女士</button>
        <button className="HeaderButton">男士</button>
        <button className="HeaderButton">配件</button>
        <button className="HeaderButton">聯絡我們</button>
      </div>

      <div style={FunctionStyle}>
        <SearchSharpIcon fontSize="large" />
        <PersonOutlineOutlinedIcon fontSize="large" />
        <LocalMallOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

const HeaderContainerStyle = {
  padding: "0 20px",
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
};

const ImgContainerStyle = {
  width: "13vh",
  height: "13vh",
  // border: "red solid 2px",
  position: "relative",
  overflow: "hidden",
};

const HeaderNavbarStyle = {
  // border: "red solid 2px",
  width: "50%",
  height: "60px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

const FunctionStyle = {
  position: "absolute",
  right: "20px",
  bottom: "10px",
  display: "flex",
  justifyContent: "space-evenly",
  width: "10%",
};

export default Header;
