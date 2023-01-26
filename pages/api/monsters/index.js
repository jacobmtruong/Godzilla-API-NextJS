const monsters = [
  {
    id: 1,
    name: "Godzilla",
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2015/06/Godzilla2014_20.jpg?w=1500",
    ability:
      "Wall Level at first (Weighs around 100,000 tonnes and moves slowly, comparable to a large sauropods dinosaur. Can destroy trees. This strong due to size), then Small Building Level (Damaged small buildings), then high Building Level+ (Crumbled many buildings by walking through the city. Destroyed a large building by slamming into it), then Town Level (Evaporated seawater in his path completely, could melt large rocks and buildings and fight Kailua at the time. Created a mushroom cloud, a kilometre wide explosion and destroyed a town. Sliced through many buildings with ease), then City Level (Created explosions that engulfed many buildings and punched through a row of skyscrapers. Evaporated a lot of seawater around it. Destroyed Godzilla City and created a crater), then Island Level (Destroyed Monster X's egg that was crashing to Earth like a meteor and completely leveled Tokyo and the surrounding area in the process), then Country Level (Destroyed a UFO that endured the explosion of crashing into Earth that killed the dinosaurs and blew Olga to chunks creating a massive explosion. Scales from his durability, killed comparable kaiju), then high Country Level+ (Scales from his durability plus fought Kiryu), then Moon Level (Created an explosion that blocked the sky and covered the Earth), then Planet Level (Fought and killed kaiju on this level), then Large Planet Level (Could melt the Earth), then baseline Star Level (Destroyed the planeload Goatherd which is much heavier than the moon, denser than Earth and moved at a percent of the speed of light).",
    yearCreated: 1956,
    link: "https://power-level-world.fandom.com/wiki/Godzilla",
  },
  {
    id: 2,
    name: "Mothra",
    img: "https://static.wikia.nocookie.net/godzilla/images/0/0e/Godzilla_King_of_the_Monsters_-_Mothra_poster_-_Clear_keyart.jpg/revision/latest?cb=20181219031630",
    ability:
      "Mothra can fly anywhere from mach 1 to 5 and usually flies around mach 3. Mothra can create powerful wind gusts using her wings. Mothra can drop reflective scales from her wings that act as a 3-D mirror, reflecting opponents' projectile attacks back at them. The scales also have a poisonous effect on enemies. Using the scales diminishes Mothra's flight ability, and for this reason it is usually used as a weapon of last resort. Using the scales diminishes Mothra's flight ability, and for this reason it is usually used as a weapon of last resort. Mothra is an immortal goddess with similarities to a phoenix. Despite having experienced death on multiple occasions, Mothra is always reincarnated through an egg that she lays through divine methods before anything else in her lifetime. Mothra can launch a barrage of poisonous stingers from her thorax.",
    yearCreated: 1961,
    link: "https://godzilla.fandom.com/wiki/Mothra_(MonsterVerse)",
  },
  {
    id: 3,
    name: "Ghidorah",
    img: "https://static.wikia.nocookie.net/godzilla/images/f/f0/Godzilla_King_of_the_Monsters_-_Ghidorah_poster_-_Clear_keyart.jpg/revision/latest?cb=20181219031637",
    ability:
      "Alpha call, Bio-electrical nature, Consciousness transferal, Durability, Energy drain, Hibernation, Forked tongues, Gravity beams, Hurricane winds, Intelligence, Meteorokinesis, Telepathy ",
    yearCreated: 1964,
    link: "https://godzilla.fandom.com/wiki/King_Ghidorah_(MonsterVerse)",
  },
];

export default function handler(req, res) {
  res.status(200).json({ monsters });
}

// {
//   id:,
//   name: '',
//   img: '',
//   ability: '',
//   yearCreated: '',
//   link: ''
// }
