import Link from "next/link";
import Image from "next/image";
import icon from "../../styles/images/icon.png";

function PlaygroundBanner() {
  const portfolioLink = () => {
    window.open("https://jacobtruong.com");
  };
  return (
    <div className="banner-container">
      <Image src={icon} alt="godzilaicon" className="icon-logo" />
      <div className="logo-container">
        <h1 className="logo" style={{ fontSize: "60px" }}>
          Godzillapi
          <span style={{ fontSize: "15px", fontWeight: "0" }}>
            {" "}
            A simple project by{" "}
            <Link href="" onClick={portfolioLink} className="profile">
              Jacob Truong
            </Link>
          </span>
        </h1>
        <h4 className="logo" style={{ fontSize: "35px" }}>
          PLAYGROUND
        </h4>
        <button className="playground" style={{ marginRight: "10px" }}>
          Home
        </button>
      </div>
    </div>
  );
}

export default PlaygroundBanner;
