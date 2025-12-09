function showLeaderboardMessage() {
  alert("Loading Leaderboard... Coming Soon!");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out your name and email!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
