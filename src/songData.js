import { v4 as uuidv4 } from "uuid";

function songData() {
  return [
    {
      name: "Sir Psycho Sexy",
      cover: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcS6RZWiekT8El_Fjediet2Dc6BxFPSLMnTV4e0qFNw9AJTo0ItV%26s&sp=1606414755T3e06c34b64b954c9bd3de75cc15313b9077769b6badfd1cbfdf48e7f2f024ed0",
      artist: "Red Hot Chilli Peppers",
      audio: "https://www.youtube.com/watch?v=tX23qUNslJA",
      color: ["#131C1B", "#C52E2E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "No Shelter",
      cover: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR-LqRpnFb3W-sEIBFAQBSwEc5phshWwmT_j7UBY-IQj0dl5-jB%26s&sp=1606415373T1d2a885a1fb5324af55ae9dbacd174c0a0084bdbdc6bb00861dda38bc9a745d8",
      artist: "Rage Against The Machine",
      audio: "https://www.youtube.com/watch?v=DbVxM3IDTJk",
      color: ["#0D0E12", "#EEEEEC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Get Greasy",
      cover: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTY5tEYjdI8vm5UxgVHHWviANDcKfkIBlSopWvAZ9tiASUw0ZQ%26s&sp=1606415470Tfba5cd82851ada6f46b060fbd34409bd0f007681da16a1f6556f8a97b9c768c7",
      artist: "Lettuce",
      audio: "https://www.youtube.com/watch?v=EjIyebaiJUI",
      color: ["#82C2EE", "#AB8124"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hair",
      cover: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQasJJ8uUWC0sxINGWgWoPEtj5TLmN67esud9dZ42tPdd8gahY%26s&sp=1606415518Tb176bed1b98bee483c30103c7c1229ee4b11f166abdf4fe12792528f9873b9dd",
      artist: "Graham Central Station",
      audio: "https://www.youtube.com/watch?v=nvMhPqg2jCo",
      color: ["#323337", "#C4A03F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Canned Heat",
      cover: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTeh_YnNi6C4eIoEBjbFu96SftR4_PbnsDfVHc4XBIbdeeg_S8%26s&sp=1606415537T3431a56a9e1993432c1896eb0e504acb38069f846e108a6686978c8d7a126530",
      artist: "Jamiroquai",
      audio: "https://www.youtube.com/watch?v=DriSbixqlbI",
      color: ["#FFFFFF", "#000000"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songData




