import monsters from "../../../../monstersData";

export default function handler(req, res) {
  const { monsterYear } = req.query;
  const monster = monsters.find(
    (monster) => monster.firstAppearance === parseInt(monsterYear)
  );
  res.status(200).json(monster);
}
