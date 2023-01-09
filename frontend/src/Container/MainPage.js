import ModelImage from "../img/model.png";
import TopImg_1 from "../img/top_1.png";
import TopImg_2 from "../img/top_2.png";
import BottomImg_1 from "../img/bottom_1.png";
import BottomImg_2 from "../img/bottom_2.png";

import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import "../css/button.css";
import "../css/img.css";
const MainPage = () => {
  return (
    <div className="MainPageContainer" style={MainPageContainerSyle}>
      <div className="ChangingRoom" style={ChangingRoomStyle}>
        <div className="ClosetBottom" style={ClosetStyle}>
          <div style={ItemStyle}>
            <img src={BottomImg_1} className="ImgStyle" />
          </div>
          <div style={ItemStyle}>
            <img src={BottomImg_2} className="ImgStyle" />
          </div>
        </div>
        <div className="modle" style={ModelSttyle}>
          <img
            src={ModelImage}
            style={{
              position: "absolute",
              left: "-9999px",
              right: "-9999px",
              top: "-9999px",
              bottom: "-9999px",
              width: "80%",
              margin: "auto",
            }}
          ></img>
        </div>
        <div className="ClosetTop" style={ClosetStyle}>
          <div style={ItemStyle}>
            <img src={TopImg_1} className="ImgStyle" />
          </div>
          <div style={ItemStyle}>
            <img src={TopImg_2} className="ImgStyle" />
          </div>
        </div>
      </div>
      <div className="UserInfo" style={UserInfoStyle}>
        <p>您的推薦尺寸為 M (170cm / 60kg)</p>
        <a style={{ color: "skyblue", cursor: "pointer" }}>我的資訊</a>
      </div>

      <div className="ItemFunction" style={ItemFunctionStyle}>
        <button className="Button">
          <FavoriteBorderTwoToneIcon />
        </button>
        <button className="Button">
          加入購物車
          <AddShoppingCartSharpIcon />
        </button>
        <button className="Button">直接購買</button>
      </div>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
};

const MainPageContainerSyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderTop: "black solid 4px",
  marginTop: "10px",
  gap: "20px",
};

const ChangingRoomStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  paddingTop: "100px",
};

const ClosetStyle = {
  width: "20%",
  height: "50vh",
  border: "black solid 3px",
  borderRadius: "15px",
  display: "flex",
  flexWrap: "wrap",
  padding: "5px",
  background: "#fff8eb",
};

const ItemStyle = {
  width: "30%",
  height: "20%",
  margin: "10px",
};

const ModelSttyle = {
  position: "relative",
  overflow: "hidden",
  width: "15%",
  height: "50vh",
  padding: "5px",
  border: "black solid 4px",
  borderRadius: "15px",
};

const UserInfoStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
  alignItems: "center",
};

const ItemFunctionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "5px",
  alignItems: "center",
};

export default MainPage;
