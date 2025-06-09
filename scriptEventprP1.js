document.querySelector('.selected-location').addEventListener('click', () => {
  document.querySelector('.location-select').classList.toggle('open');
});// Закрытие списка при клике 

document.querySelector('.location-icon').addEventListener('click', (e) => {
  e.stopPropagation(); // чтобы не сработало закрытие из document
  document.querySelector('.location-select').classList.toggle('open');
});

// Категории — 8 карточек
const categoryCardsData = [
  { icon: "card-icon/icon1.png", title: "Travel and<br>Outdoor" },
  { icon: "card-icon/icon2.png", title: "Social<br>Activities" },
  { icon: "card-icon/icon3.png", title: "Hobbies and<br>Passions" },
  { icon: "card-icon/icon4.png", title: "Sports and<br>Fitness" },
  { icon: "card-icon/icon5.png", title: "Health and<br>Wellbeing" },
  { icon: "card-icon/icon6.png", title: "Technology" },
  { icon: "card-icon/icon7.png", title: "Art and<br>Culture" },
  { icon: "card-icon/icon8.png", title: "Games" },
];

const categoryContainer = document.getElementById("categoryCardsContainer");

categoryCardsData.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.icon}" alt="${card.title.replace(/<br>/g, ' ')}">
    <p class="card-title">${card.title}</p>
  `;
  categoryContainer.appendChild(div);
});

// Города — 5 карточек
const cityCardsData = [
  { icon: "card-icon/city1.png", title: "New York" },
  { icon: "card-icon/city2.png", title: "San Francisco" },
  { icon: "card-icon/city3.png", title: "Chicago" },
  { icon: "card-icon/city4.png", title: "Nashville" },
  { icon: "card-icon/city5.png", title: "Miami" },
];

const cityContainer = document.getElementById("cityCardsContainer");

cityCardsData.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.icon}" alt="${card.title}">
    <h3>${card.title}</h3>
  `;
  cityContainer.appendChild(div);
});
