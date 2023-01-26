const monsters = [
  {
    id: 1,
    name: "Godzilla",
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2015/06/Godzilla2014_20.jpg?w=1500",
    level:
      "Wall Level at first (Weighs around 100,000 tonnes and moves slowly, comparable to a large sauropods dinosaur. Can destroy trees. This strong due to size), then Small Building Level (Damaged small buildings), then high Building Level+ (Crumbled many buildings by walking through the city. Destroyed a large building by slamming into it), then Town Level (Evaporated seawater in his path completely, could melt large rocks and buildings and fight Kailua at the time. Created a mushroom cloud, a kilometre wide explosion and destroyed a town. Sliced through many buildings with ease), then City Level (Created explosions that engulfed many buildings and punched through a row of skyscrapers. Evaporated a lot of seawater around it. Destroyed Godzilla City and created a crater), then Island Level (Destroyed Monster X's egg that was crashing to Earth like a meteor and completely leveled Tokyo and the surrounding area in the process), then Country Level (Destroyed a UFO that endured the explosion of crashing into Earth that killed the dinosaurs and blew Olga to chunks creating a massive explosion. Scales from his durability, killed comparable kaiju), then high Country Level+ (Scales from his durability plus fought Kiryu), then Moon Level (Created an explosion that blocked the sky and covered the Earth), then Planet Level (Fought and killed kaiju on this level), then Large Planet Level (Could melt the Earth), then baseline Star Level (Destroyed the planeload Goatherd which is much heavier than the moon, denser than Earth and moved at a percent of the speed of light).",
    yearCreated: 1956,
  },
  {
    name: "Mechagozilla",
    level: "strong",
  },
];

export default function handler(req, res) {
  res.status(200).json({ monsters: monsters });
}
