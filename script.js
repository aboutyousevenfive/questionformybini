  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const noText = document.getElementById("noText");

  let size = 16;
  let paddingX = 22;
  let paddingY = 10;
  let count = 0;

  const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Think again 😢",
    "Last chance!",
    "Pleaseee 🥺",
    "You will break my heart 💔"
  ];

  noBtn.addEventListener("click", () => {
   size += 35;
   paddingX += 40;
   paddingY += 25;

    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = `${paddingY}px ${paddingX}px`;

    // Ganti teks NO
    noText.textContent = noTexts[count % noTexts.length];
    count++;
  });

  yesBtn.addEventListener("click", () => {
    container.innerHTML = `
      <p class="thank-you">You really accpet me???<br>Thank you sayaggg❤️❤️❤️</p>
    `;
  });
