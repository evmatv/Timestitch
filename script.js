let randomNumber;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const winImage = document.getElementById('winImage');

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    guessInput.value = ''; // Очистить поле ввода
    message.textContent = ''; // Очистить сообщение
    winImage.style.display = 'none'; // Скрыть изображение
}

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        message.textContent = 'Поздравляем! Вы угадали число!';
        winImage.style.display = 'block'; // Показать изображение
    } else if (userGuess < randomNumber) {
        message.textContent = 'Слишком низко! Попробуйте снова.';
    } else {
        message.textContent = 'Слишком высоко! Попробуйте снова.';
    }
});

// Начать новую игру при загрузке страницы
startNewGame();
