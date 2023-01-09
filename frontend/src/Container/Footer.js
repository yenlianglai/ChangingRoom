import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="FooterContainer" style={FooterContainerStyle}>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div className="FooterCard" style={FooterCardStyle}>
          <h2>NO WALL</h2>
          <p>&copy; 2023</p>
        </div>
        <div className="FooterCard" style={FooterCardStyle}>
          <h3>Customers</h3>
          <p>Buyer</p>
          <p>Supplier</p>
        </div>
        <div className="FooterCard" style={FooterCardStyle}>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="FooterCard" style={FooterCardStyle}>
          <h3>Further Information</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="FooterCard" style={FooterCardStyle}>
          <h3>Follow Us</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "6px",
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterContainerStyle = {
  position: "relative",
  bottom: "0px",
  width: "100%",
  borderTop: "black solid 2px",
  marginTop: "20px",
};

const FooterCardStyle = {
  display: "flex",
  //   border: "red solid 2px",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "8%",
};

export default Footer;
