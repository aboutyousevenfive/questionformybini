const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");
const container = document.getElementById("container"); // 🔥 INI YANG KURANG

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

  noText.textContent = noTexts[count % noTexts.length];
  count++;
});

yesBtn.addEventListener("click", () => {
  // 🔥 KIRIM KE GOOGLE SHEET
  fetch("https://script.google.com/macros/s/AKfycbwWtTJTUAMQJ6zfhTS-NVcX-VO5KurY69lMnCy5gqM8xI4EfIw2ZLLrlE0aWeQp9_00/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "answer=YES"
  });

  // 🔥 GANTI TAMPILAN
  container.innerHTML = `
    <p class="thank-you">
      You really accept me???<br>
      Thank you sayanggg ❤️❤️❤️
    </p>
  `;
});
