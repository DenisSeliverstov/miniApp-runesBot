const tg = window.Telegram.WebApp;

tg.ready(); // Говорим Telegram, что приложение готово

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#2c3e50";
  document.body.style.color = "#babcbd";

  // Добавление кнопки закрытия Web App
  tg.MainButton.setText("Закрыть");
  tg.MainButton.show();
  tg.MainButton.onClick(() => tg.close());
});

const user = tg.initDataUnsafe.user;

if (user) {
  const greeting = document.createElement('h2');
  greeting.textContent = `Привет, ${user.first_name}!`;
  document.querySelector('.container').prepend(greeting);
}

const runes = [
  { name: "Феху", meaning: "Богатство, изобилие.", reversed: "Потери, жадность." },
  { name: "Уруз", meaning: "Сила, энергия.", reversed: "Слабость, болезнь." },
  // остальные руны
];

function getRandomRune() {
  const rune = runes[Math.floor(Math.random() * runes.length)];
  const isReversed = Math.random() < 0.5;
  return {
    name: rune.name,
    meaning: isReversed ? rune.reversed : rune.meaning,
    isReversed: isReversed
  };
}

function showOneRune() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("one-rune").classList.remove("hidden");

  const rune = getRandomRune();
  const runeContainer = document.getElementById("rune-container");

  runeContainer.innerHTML = `
    <div class="rune ${rune.isReversed ? 'reversed' : ''}">${rune.name}</div>
    <div class="description">${rune.meaning}</div>
  `;
}

function showThreeRunes() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("three-runes").classList.remove("hidden");

  const runesContainer = document.getElementById("runes-container");
  runesContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const rune = getRandomRune();
    runesContainer.innerHTML += `
      <div class="rune ${rune.isReversed ? 'reversed' : ''}">${rune.name}</div>
      <div class="description">${rune.meaning}</div>
    `;
  }
}

function goBack() {
  document.getElementById("one-rune").classList.add("hidden");
  document.getElementById("three-runes").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}
