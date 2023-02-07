import React from "react";
import classes from "../display/linkslist.module.css";

const Linkslist = () => {
  function FieldReference() {
    return (
      <>
        <p className={classes.fieldreference} style={{ marginBottom: "20px" }}>
          Field Reference
        </p>
        <table>
          <thead>
            <tr className={classes.tablebox}>
              <th>Field Name</th>
              <th>Description</th>
              <th>Data Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.tablebox}>
              <td>id</td>
              <td>Monster's id</td>
              <td>Number</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>name</td>
              <td>Monster's name</td>
              <td>String</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>img</td>
              <td>Monster's image</td>
              <td>String</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>ability</td>
              <td>Monster's abilities</td>
              <td>String</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>firstAppearance</td>
              <td>Monster's first time appeared on screen (year)</td>
              <td>Number</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>link</td>
              <td>Monster's descriptive information</td>
              <td>String</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

  function Endpoints() {
    return (
      <>
        <p className={classes.fieldreference} style={{ marginBottom: "20px" }}>
          API Calls & Endpoints
        </p>
        <table>
          <thead>
            <tr className={classes.tablebox}>
              <th>HTTP Medthod</th>
              <th>Endpoint</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.tablebox}>
              <td>GET</td>
              <td>/api/monsters</td>
              <td>Returns an array of all Monster in our database.</td>
            </tr>

            <tr className={classes.tablebox}>
              <td>GET</td>
              <td>/api/monsters/name/:name</td>
              <td>
                Returns an array of Monster based on their name. The array will
                contain one Monster.
              </td>
            </tr>

            <tr className={classes.tablebox}>
              <td>GET</td>
              <td>/api/monsters/year/:year</td>
              <td>
                Returns an array of Monster based on the year they were created.
                The array will contain one or more Monsters.
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

  return (
    <div className={classes.listcontainer}>
      <div className={classes.listchildrenone}>
        <p className={classes.fieldreference} style={{ marginBottom: "20px" }}>
          Documentation
        </p>
        <ul style={{ margin: "0" }}>
          <li>
            Get the full list of Monster:{" "}
            <span className={classes.apiroute}>/api/monsters</span>
          </li>
          <li>
            Query the API for a specific Monster by name by passing the name in
            the URL:{" "}
            <span className={classes.apiroute}>
              /api/monsters/{"{"}name{"}"}
            </span>
          </li>
          <li>
            Query the API for a specific Monster by first year appeared on
            screen by passing the year in the URL:{" "}
            <span className={classes.apiroute}>
              /api/monsters/{"{"}year{"}"}
            </span>
          </li>
          <p className={classes.example}>
            Capitlize the first intial of the monster's name. Examples:
          </p>
          <ul>
            <li className={classes.highlighted}>
              /api/monsters/name/Mechagodzilla
            </li>
            <li className={classes.highlighted}>
              /api/monsters/name/King_Kong
            </li>
            <li className={classes.highlighted}>/api/monsters/year/1994</li>
          </ul>
        </ul>
      </div>

      <div className={classes.listchildrenthree}>
        <Endpoints />
      </div>

      <div className={classes.listchildrentwo}>
        <FieldReference />
      </div>
    </div>
  );
};

export default Linkslist;
