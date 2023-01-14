import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TextField from "@mui/material/TextField";
import "../css/button.css";

const Header = ({ width }) => {
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
    flexWrap: width < 800 ? "wrap" : "no-wrap",
    alignSelf: width < 800 ? "center" : "flex-end",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0 10px",
    gap: "5px",
  };

  const FunctionStyle = {
    display: "flex",
    gap: "2px",
    marginLeft: "auto",
    justifyContent: "space-evenly",
    width: "10%",
  };
  return (
    <div className="HeaderContainer" style={HeaderContainerStyle}>
      <div className="imgContainer" style={ImgContainerStyle}>
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
        {width > 400 && <button className="HeaderButton">配件</button>}
      </div>
      <TextField
        id="search-bar"
        className="text"
        label="想找什麼..."
        variant="outlined"
        placeholder="Search..."
        size="small"
        style={{ width: "30%", margin: "0 10px 10px 20px" }}
      />

      <div style={FunctionStyle}>
        <PersonOutlineOutlinedIcon fontSize={width < 800 ? "small" : "large"} />
        <LocalMallOutlinedIcon fontSize={width < 800 ? "small" : "large"} />
      </div>
    </div>
  );
};

export default Header;
