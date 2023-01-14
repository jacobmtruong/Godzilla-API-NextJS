import Image from "next/image";
import icon from "../../styles/images/icon.png";
import Link from "next/link";
import classes from "../display/banner-style.module.css";

function Banner() {
  return (
    <div className={classes.bannercontainer}>
      <Image src={icon} alt="godzilaicon" className={classes.iconlogo} />
      <div className={classes.logocontainer}>
        <h1 className={classes.logo} style={{ fontSize: "60px" }}>
          Godzillapi
          <span style={{ fontSize: "15px", fontWeight: "0" }}>
            {" "}
            A simple project by{" "}
            <Link href="/" className={classes.profile}>
              Jacob Truong
            </Link>
          </span>
        </h1>
        <h4 className={classes.logo} style={{ fontSize: "30px" }}>
          ゴジラのAPI
        </h4>
        <button className={classes.playground}>Go to API Playground</button>
      </div>
    </div>
  );
}

export default Banner;
