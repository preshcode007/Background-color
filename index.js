const colors = [
  "#000080",
  "#00008B",
  "#0000CD",
  "#0000FF",
  "#006400",
  "#008000",
  "#008080",
  "#008B8B",
  "#00BFFF",
  "#00CED1",
  "#00FA9A",
  "#00FF00",
  "#00FF7F",
  "#00FFFF",
  "#00FFFF",
  "#191970",
  "#1E90FF",
  "#20B2AA",
  "#228B22",
  "#2E8B57",
  "#2F4F4F",
  "#2F4F4F",
  "#32CD32",
  "#3CB371",
  "#40E0D0",
  "#4169E1",
  "#4682B4",
  "#483D8B",
  "#48D1CC",
  "#4B0082",
  "#556B2F",
  "#5F9EA0",
  "#6495ED",
  "#663399",
  "#66CDAA",
  "#696969",
  "#696969",
  "#6A5ACD",
  "#6B8E23",
  "#708090",
  "#708090",
  "#778899",
  "#778899",
  "#7B68EE",
  "#7CFC00",
  "#7FFF00",
  "#7FFFD4",
  "#800000",
  "#800080",
  "#808000",
  "#808080",
  "#808080",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

getRandomNumber = () => Math.floor(Math.random() * colors.length);
