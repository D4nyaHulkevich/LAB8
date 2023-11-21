let playerName;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let roundsPlayed = 0;

    function playGame() {
      if (!playerName) {
        playerName = prompt("Введіть своє ім'я:");
        if (!playerName) {
          alert("Будь ласка, введіть ім'я для початку гри.");
          return;
        }
      }

      const player = Math.floor(Math.random() * 10) + 1;
      const computer = Math.floor(Math.random() * 10) + 1;

      document.getElementById('playerDice').innerHTML = player;
      document.getElementById('computerDice').innerHTML = computer;

      let roundResult = '';
      if (player > computer) {
        roundResult = `${playerName} виграв раунд!`;
        playerWins++;
      } else if (player < computer) {
        roundResult = 'Комп\'ютер виграв раунд!';
        computerWins++;
      } else {
        roundResult = 'Нічия в цьому раунді.';
        draws++;
      }

      document.getElementById('result').innerHTML += `<p>Раунд ${roundsPlayed + 1}: ${playerName}: ${player} | Комп'ютер: ${computer} | ${roundResult}</p>`;

      roundsPlayed++;

      if (roundsPlayed === 3) {
        endGame();
      }

      updateScore();
    }

    function updateScore() {
      document.getElementById('score').innerHTML = `Гравець: ${playerWins} | Нічиї: ${draws} | Комп'ютер: ${computerWins}`;

    }

    function endGame() {
      let winner;
      if (playerWins > computerWins) {
        winner = playerName;
      } else if (playerWins < computerWins) {
        winner = 'Комп\'ютер';
      } else {
        winner = 'Нічия';
      }
      document.getElementById('winner').innerHTML = `Переможець: ${winner}`;
      document.getElementById('playButton').disabled = true;
      document.getElementById('playButton').innerHTML = 'Генерувати';
    }

    function restartGame() {
      playerName = null;
      playerWins = 0;
      computerWins = 0;
      draws = 0;
      roundsPlayed = 0;
      document.getElementById('result').innerHTML = '';
      document.getElementById('winner').innerHTML = '';
      document.getElementById('playButton').disabled = false;
      document.getElementById('playButton').innerHTML = 'Генерувати';
      updateScore();
    }