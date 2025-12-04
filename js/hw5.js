const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "q"];
let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
const newGameBtn = document.getElementById("new-game");

// показуємо першу клавішу
keyElement.textContent = keys[currentKeyIndex];

// keydown — перевірка клавіші
document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;

    if (currentKeyIndex < keys.length) {
      keyElement.textContent = keys[currentKeyIndex];
    } else {
      PNotify.success({
        text: "Ви виграли! Всі клавіші натиснуто 🎉"
      });
      currentKeyIndex = 0;
      keyElement.textContent = keys[currentKeyIndex];
    }
  } else {
    PNotify.error({
      text: "Неправильна клавіша"
    });
  }
});

// keypress - заборона стандартної дії
document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

// кнопка "Нова гра"
newGameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
  keyElement.textContent = keys[currentKeyIndex];

  PNotify.info({
    text: "Почато нову гру"
  });
});
