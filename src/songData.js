import { v4 as uuidv4 } from "uuid"

function songData() {
  return [
    {
      name: "Easily",
      cover: "https://images-na.ssl-images-amazon.com/images/I/A1ptbBS2LNL._AC_SL1500_.jpg",
      artist: "Red Hot Chilli Peppers",
      audio: "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Red%20Hot%20Chili%20Peppers/Red%20Hot%20Chili%20Peppers%20'Easily'.mp3",
      color: ["#131C1B", "#C52E2E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "No Shelter",
      cover: "https://upload.wikimedia.org/wikipedia/en/5/51/RAtM-BattleofLosAngeles.jpeg",
      artist: "Rage Against The Machine",
      audio: "https://www.sinj.com/sounds/mp3s/Rock/RATM/Rage%20Against%20The%20Machine%20-%20No%20Shelter.mp3",
      color: ["#0D0E12", "#EEEEEC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Whistler",
      cover: "https://img.discogs.com/dKo5Wm6KMvczOxtBI4zQHp5AR6M=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1430006-1586623923-7398.jpeg.jpg",
      artist: "Jethro Tull",
      audio: "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Jethro%20Tull/Jethro%20Tull%20'The%20Whistler'.mp3",
      color: ["#41312C", "#EEC063"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Canned Heat",
      cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Synkronized.png",
      artist: "Jamiroquai",
      audio: "https://jacobsm.com/geedryve/records/mp3s/Jamiroquai/High%20Times-%20Singles%201992-2006/Canned%20Heat.mp3",
      color: ["##D2D4E4", "#795D49"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songData




