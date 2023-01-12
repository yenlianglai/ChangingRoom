import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import "../css/button.css";
import "../css/img.css";
import { useState } from "react";

const MainPage = () => {
  const bottom_imgs = ["bottom_1.png", "bottom_2.png"];
  const top_imgs = ["top_1.png", "top_2.png"];
  return (
    <div className="MainPageContainer" style={MainPageContainerSyle}>
      <div className="ChangingRoom" style={ChangingRoomStyle}>
        <div className="ClosetBottom" style={ClosetStyle}>
          {bottom_imgs.map((img) => (
            <button className="ItemButton" onClick={() => console.log(123)}>
              <img src={`/img/bottom/${img}`} className="ImgStyle" />
            </button>
          ))}
        </div>
        <div className="modle" style={ModelSttyle}>
          <img
            src={"/img/model.png"}
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
          {top_imgs.map((img) => (
            <button className="ItemButton" onClick={() => console.log(123)}>
              <img src={`/img/top/${img}`} className="ImgStyle" />
            </button>
          ))}
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
  gap: "20px",
  padding: "5px",
  background: "#fff8eb",
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
