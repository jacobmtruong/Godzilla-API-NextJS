import classes from "../playground/monster-card.module.css";
import Image from "next/image";

function DisplayResult(props) {
  const monster = props.monster;
  const isLoading = props.isLoading;
  console.log(monster);

  if (!isLoading) {
    return (
      <div className={classes.monstercard}>
        <p style={{ fontSize: "35px", fontWeight: "600" }}>{monster.name}</p>
        <Image
          src={monster.img}
          alt="godzilaicon"
          className={classes.monsterimage}
          loading="eager"
          priority={true}
          width={500}
          height={500}
        />
        <p>
          <span className={classes.titles}>First Appear</span>:{" "}
          {monster.firstAppearance}
        </p>
        <p>
          <span className={classes.titles}>Ability</span>: {monster.ability}
        </p>
        <a
          href={monster.link}
          style={{ margin: "0" }}
          className={classes.learnmorebutton}
        >
          Learn more
        </a>
      </div>
    );
  }
  return (
    <>
      <h1>Loading</h1>
      {console.log("Hello")}
    </>
  );
}
export default DisplayResult;
