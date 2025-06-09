

//Macbuk2Functional menu
 const eventsStore = [
  {
    title: "INFJ Personality Type- Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title: "NYC AI Users- AI Tech Talks, Demo & Social",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat",
    description: "Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80",
    type: "offline",
    attendees: 55,
    category: "Health and Wellbeing",
    distance: 15,
  },
];
 // датa
function formatDate(dateObj) {
  const options = { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" };
  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

//  карточки мероприятия
function createEventCard(event) {
  const distanceText = event.type === "offline" ? `(${event.distance} km)` : "<br> <img class=camera-img src=MacBooK2/camera.png alt=camera /> Online event";

  return `
    <div class="event-card">
      <img class="event-img" src="${event.image}" alt="${event.title}" />

      <div class="event-info">
      <p class="event-date">${formatDate(event.date)}</p>
        <p class="event-type">${event.type}</p>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.description}</p>
       
        <p class="event-meta">
          
          <span class="event-category">${event.category}</span>
          <span class="event-distance">${distanceText}</span>
        </p>
         ${event.attendees ? `<p class="event-attendees">attendees: ${event.attendees}</p>` : ""}
      </div>
    </div>
  `;
}


// Главная функция  с фильтрацией
function renderFilteredEvents() {
  const container = document.querySelector(".events-list");
  container.innerHTML = "";

  const filtered = eventsStore.filter(event => {
    const matchType = !filters.type || event.type === filters.type;
    const matchCategory = !filters.category || event.category === filters.category;
    const matchDistance = !filters.distance || event.distance <= Number(filters.distance);
    const matchDate = !filters.date || event.date.toISOString().slice(0, 10) === filters.date;

    return matchType && matchCategory && matchDistance && matchDate;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-results">No events match your filters.</p>`;
    return;
  }
console.log("Filtered events:", filtered);
  container.innerHTML = filtered.map(createEventCard).join("");
}

// Объект с выбранными фильтрами
const filters = {
  type: "",
  date: "",
  distance: "",
  category: "",
};

// Работа фильтров
document.addEventListener("DOMContentLoaded", () => {
  const combos = document.querySelectorAll(".filter-combo");

  combos.forEach(combo => {
    const dropdown = combo.querySelector(".dropdown-options");
    const span = combo.querySelector("span");
    const options = dropdown.querySelectorAll("li");

    // Показать/скрыть список по клику
    combo.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".dropdown-options").forEach(d => {
        if (d !== dropdown) d.classList.add("hidden");
      });
      dropdown.classList.toggle("hidden");
    });

    // Обработка выбора опции
    options.forEach(item => {
      item.addEventListener("click", e => {
        e.stopPropagation();
        const value = item.dataset.value;
        const text = item.textContent;
        span.textContent = text;
        dropdown.classList.add("hidden");

        // Сохраняем фильтр
        if (combo.id === "typeFilter") filters.type = value;
        if (combo.id === "dateFilter") filters.date = value;
        if (combo.id === "distanceFilter") filters.distance = value;
        if (combo.id === "categoryFilter") filters.category = value;

        renderFilteredEvents();
      });
    });
  });

  // Закрыть все  при клике вне
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-options").forEach(d => d.classList.add("hidden"));
  });

  // Первый запуск
  renderFilteredEvents();
});