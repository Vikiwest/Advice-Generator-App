const adviceDescription = document.getElementById("description");
const adviceDiceBtn = document.getElementById("dice-button");
const adviceTitle = document.getElementById("advice-title");

adviceDiceBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceDescription.textContent = `"${data.slip.advice}"`;
    adviceTitle.textContent = `ADVICE #${data.slip.id}`;
  } catch (error) {
    adviceDescription.textContent =
      "Failed to fetch advice. Please try again later.";
    console.error("Error fetching advice:", error);
  }
});


