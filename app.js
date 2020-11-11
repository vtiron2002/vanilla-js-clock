const select = (el) => document.querySelector(el);

const timeEl = select(".time");
const nonMilitaryBtn = select("button.non-military");
const militaryBtn = select("button.military");
const daysOfTheWeekUl = select("ul.daysOfTheWeek");

let time = "";
let militaryFormat = true;

nonMilitaryBtn.onclick = () => (militaryFormat = false);
militaryBtn.onclick = () => (militaryFormat = true);

const render = () => {
  if (militaryFormat) {
    nonMilitaryBtn.classList.remove("active");
    militaryBtn.classList.add("active");
  } else {
    militaryBtn.classList.remove("active");
    nonMilitaryBtn.classList.add("active");
  }
};

render();

const interval = setInterval(() => {
  const timeNow = new Date(Date.now());
  render();
  if (militaryFormat) {
    militaryBtn.classList.add("active");
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    const addZero = (t) => (t < 10 ? `0${t}` : t);
    time = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  } else {
    nonMilitaryBtn.classList.add("active");
    time = timeNow.toLocaleTimeString();
  }
  timeEl.innerText = time;
}, 1000);

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfTheWeek = new Date().getDay();
daysOfTheWeek.forEach((day, i) => {
  const dayOfTheWeekLi = document.createElement("li");
  dayOfTheWeekLi.innerText = day;
  if (currentDayOfTheWeek === i) {
    dayOfTheWeekLi.classList.add("active");
  }
  daysOfTheWeekUl.appendChild(dayOfTheWeekLi);
});
