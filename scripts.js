const runes = [
  { name: "Феху", meaning: "Богатство, изобилие.", reversed: "Потери, жадность." },
  { name: "Уруз", meaning: "Сила, энергия.", reversed: "Слабость, болезнь." },
  { name: "Турисаз", meaning: "Защита, препятствие.", reversed: "Опасность, конфликт." },
  { name: "Ансуз", meaning: "Знание, сообщение.", reversed: "Обман, путаница." },
  { name: "Райдо", meaning: "Путешествие, движение.", reversed: "Задержка, препятствие." },
  { name: "Кеназ", meaning: "Озарение, творческая сила.", reversed: "Тьма, разочарование." },
  { name: "Гебо", meaning: "Дар, партнерство.", reversed: "Жертва, неравенство." },
  { name: "Вуньо", meaning: "Радость, успех.", reversed: "Печаль, трудности." },
  { name: "Хагалаз", meaning: "Разрушение, стихия.", reversed: "Внутренняя трансформация." },
  { name: "Наутиз", meaning: "Нужда, необходимость.", reversed: "Освобождение, окончание страданий." },
  { name: "Иса", meaning: "Застой, препятствие.", reversed: "Пауза, ожидание." },
  { name: "Йера", meaning: "Урожай, результаты усилий.", reversed: "Задержка, несвоевременность." },
  { name: "Эйваз", meaning: "Защита, оборона.", reversed: "Конфликт, неудача." },
  { name: "Перт", meaning: "Тайна, судьба.", reversed: "Утрата, разочарование." },
  { name: "Альгиз", meaning: "Защита, поддержка.", reversed: "Риск, уязвимость." },
  { name: "Совело", meaning: "Успех, победа.", reversed: "Неправильное использование силы." },
  { name: "Тейваз", meaning: "Справедливость, победа.", reversed: "Поражение, несправедливость." },
  { name: "Беркана", meaning: "Рождение, рост.", reversed: "Смерть, упадок." },
  { name: "Эваз", meaning: "Прогресс, движение.", reversed: "Застой, промедление." },
  { name: "Манназ", meaning: "Человечество, сообщество.", reversed: "Изоляция, эгоизм." },
  { name: "Лагуз", meaning: "Интуиция, эмоции.", reversed: "Блокировка интуиции, страх." },
  { name: "Ингуз", meaning: "Завершение, плодородие.", reversed: "Задержка, трудности в завершении." },
  { name: "Дагаз", meaning: "День, рассвет.", reversed: "Неожиданные перемены, переходный период." },
  { name: "Отал", meaning: "Наследие, собственность.", reversed: "Потеря, разрыв связей." }
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
