import monsters from "../../../../monstersData";

export default function handler(req, res) {
  const { monsterName } = req.query;
  const monster = monsters.find((monster) => monster.name === monsterName);
  res.status(200).json(monster);
}
