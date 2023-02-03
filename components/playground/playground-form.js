import classes from "../playground/playground-form.module.css";
import { useState } from "react";

function PlaygroundForm() {
  const [year, setYear] = useState("");
  const [name, setName] = useState("");

  async function getMonsterByName(e) {
    e.preventDefault();
    const res = await fetch(
      `https://godzilla-api.vercel.app/api/monsters/name/${name}`
    );
    const data = await res.json();
    console.log(data);
    return {
      props: {
        monster: data[0],
      },
    };
  }

  return (
    <div className={classes.formcontainer}>
      <div className={classes.formsmallcontainer}>
        <form>
          <span className={classes.linkinput}>
            localhost:3000/api/monster/year/
          </span>
          <input
            style={{ width: "55%" }}
            type="number"
            onChange={(e) => setYear(e.target.value)}
            placeholder=":year"
            value={year}
          />
          <button className={classes.formbutton}>Submit</button>
        </form>

        <form onSubmit={getMonsterByName}>
          <span className={classes.linkinput}>
            https://godzilla-api.vercel.app/playground/api/monsters/name/
          </span>
          <input
            style={{ width: "53.6%" }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder=":name"
            value={name}
          />
          <button className={classes.formbutton}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PlaygroundForm;