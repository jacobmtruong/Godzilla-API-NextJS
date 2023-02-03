import Image from "next/image";
import icon from "../../styles/images/icon.png";
import Link from "next/link";
import classes from "../display/banner-style.module.css";
import { useRouter } from "next/router";

function Banner() {
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
        <h4 className={classes.logo} style={{ fontSize: "30px" }}>
          ゴジラのAPI
        </h4>
        <button
          className={classes.playground}
          onClick={() => router.push("/playground")}
        >
          Go to API Playground
        </button>
      </div>
    </div>
  );
}

export default Banner;
