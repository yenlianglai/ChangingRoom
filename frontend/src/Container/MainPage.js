import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import "../css/button.css";
import "../css/img.css";
import { useState, useEffect } from "react";

const MainPage = ({ width }) => {
  const MainPageContainerSyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderTop: "#0A0A0A solid 2px",
    marginTop: "15px",
    gap: "20px",
  };

  const ChangingRoomStyle = {
    width: "100%",
    display: "flex",
    flexDirection: width > 900 ? "row" : "column",
    justifyContent: "center",
    alignItems: "center",
    gap: width > 900 ? "50px" : "10px",
    paddingTop: "100px",
  };

  const ClosetStyle = {
    width: width > 900 ? "20%" : "80%",
    height: width > 900 ? "50vh" : "20vh",
    border: "#0A0A0A solid 3px",
    borderRadius: "15px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "5px",
    background: "#212121",
    overflow: "auto",
  };

  const ModelSttyle = {
    position: "relative",
    overflow: "hidden",
    width: width > 900 ? "15%" : "30%",
    height: width > 900 ? "50vh" : "30vh",
    padding: "5px",
    border: "#0A0A0A solid 2px",
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
  const bottom_imgs = ["bottom_1.png", "bottom_2.png", "bottom_3.png"];
  const top_imgs = ["top_1.png", "top_2.png", "top_3.png", "top_4.png"];
  const [model_img, setModelImg] = useState("model.png");
  const changeCloth = (img) => {
    const ele = document.getElementById(model_img);
    if (ele) ele.style.border = "#0A0A0A solid 1.5px";
    if (img == model_img) {
      setModelImg("model.png");
    } else {
      setModelImg(img);
    }
  };

  useEffect(() => {
    const ele = document.getElementById(model_img);
    if (ele) {
      ele.style.border = "#98ff4a solid 5px";
    }
  }, [model_img]);
  return (
    <div className="MainPageContainer" style={MainPageContainerSyle}>
      <div className="ChangingRoom" style={ChangingRoomStyle}>
        <div className="ClosetTop" style={ClosetStyle}>
          {top_imgs.map((img, i) => (
            <button
              className="ItemButton"
              id={img}
              onClick={() => changeCloth(img)}
              key={i}
            >
              <img src={`/img/top/${img}`} className="ImgStyle" />
            </button>
          ))}
        </div>
        <div className="modle" style={ModelSttyle}>
          <img
            src={`/img/change/${model_img}`}
            style={{
              position: "absolute",
              left: "-9999px",
              right: "-9999px",
              top: "-9999px",
              bottom: "-9999px",
              width: "150%",
              margin: "auto",
            }}
          ></img>
        </div>
        <div className="ClosetBottom" style={ClosetStyle}>
          {bottom_imgs.map((img, i) => (
            <button
              className="ItemButton"
              id={img}
              onClick={() => changeCloth(img)}
              key={i}
            >
              <img src={`/img/bottom/${img}`} className="ImgStyle" />
            </button>
          ))}
        </div>
      </div>
      <div className="UserInfo" style={UserInfoStyle}>
        <p>您的推薦尺寸為 L (175cm / 60kg)</p>
        <a style={{ color: "blue", cursor: "pointer" }}>我的資訊</a>
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

export default MainPage;
