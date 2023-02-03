import Link from "next/link";
import Image from "next/image";
import icon from "../../styles/images/icon.png";
import classes from "../display/banner-style.module.css";
import { useRouter } from "next/router";

function PlaygroundBanner() {
  const portfolioLink = () => {
    window.open("https://jacobtruong.com");
  };

  const router = useRouter();

  return (
    <div className={classes.bannercontainer}>
      <Image
        src={icon}
        alt="godzilaicon"
        className={classes.iconlogo}
        loading="eager"
        priority={true}
      />
      <div className={classes.logocontainer}>
        <h1 className={classes.logo} style={{ fontSize: "60px" }}>
          Godzillapi
          <span style={{ fontSize: "15px", fontWeight: "0" }}>
            {" "}
            A simple project by{" "}
            <Link href="" onClick={portfolioLink} className={classes.profile}>
              Jacob Truong
            </Link>
          </span>
        </h1>
        <h4 className={classes.logo} style={{ fontSize: "41px" }}>
          PLAYGROUND
        </h4>
        <button
          className={classes.playground}
          onClick={() => router.push("/")}
          style={{ marginRight: "10px" }}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default PlaygroundBanner;
