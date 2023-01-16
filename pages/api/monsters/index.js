const monsters = [
  {
    name: "Godzilla",
    level: "strong",
  },
  {
    name: "Mechagozilla",
    level: "strong",
  },
];

export default function handler(req, res) {
  res.status(200).json({ monsters: monsters });
}
