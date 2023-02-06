import classes from "../playground/playground-form.module.css";
import DisplayResult from "./monster-card";
import { useState } from "react";

function PlaygroundForm() {
  const [year, setYear] = useState("");
  const [name, setName] = useState("");

  const [monsterName, setMonsterName] = useState("");

  async function getMonsterByName(e) {
    e.preventDefault();
    const res = await fetch(
      `https://godzilla-api.vercel.app/api/monsters/name/${name}`
    );
    const data = await res.json();
    setMonsterName(data);
  }

  async function getMonsterByYear(e) {
    e.preventDefault();
    const res = await fetch(
      `https://godzilla-api.vercel.app/api/monsters/year/${year}}`
    );
    const data = await res.json();
    setMonsterName(data);
  }

  return (
    <div className={classes.formcontainer}>
      <div className={classes.formsmallcontainer}>
        <form onSubmit={getMonsterByYear}>
          <span className={classes.linkinput}>
            https://godzilla-api.vercel.app/api/monsters/year/
          </span>
          <input
            style={{ width: "40%" }}
            type="number"
            onChange={(e) => setYear(e.target.value)}
            placeholder=":year"
            value={year}
          />
          <button className={classes.formbutton}>Find</button>
        </form>

        <form onSubmit={getMonsterByName}>
          <span className={classes.linkinput}>
            https://godzilla-api.vercel.app/api/monsters/name/
          </span>
          <input
            style={{ width: "40%" }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder=":name"
            value={name}
          />
          <button className={classes.formbutton}>Find</button>
        </form>
      </div>

      <DisplayResult monster={monsterName} />
    </div>
  );
}

export default PlaygroundForm;
