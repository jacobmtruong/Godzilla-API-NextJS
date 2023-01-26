import monsters from "../../../monstersData";

export default function handler(req, res) {
  const { monsterId } = req.query;
  const monster = monsters.find(
    (monster) => monster.id === parseInt(monsterId)
  );
  res.status(200).json(monster);
}
