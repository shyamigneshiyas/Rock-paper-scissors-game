function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "Computer chose: " + computerChoice + "<br>";

  if (userChoice === computerChoice) {
    resultText += "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText += "You win! 🎉";
  } else {
    resultText += "Computer wins! 🤖";
  }

  document.getElementById("result").innerHTML = resultText;
}
