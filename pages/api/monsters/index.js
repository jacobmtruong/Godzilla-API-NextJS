import monsters from "../../../monstersData";

export default function (req, res) {
  res.status(200).json({ monsters });
}
