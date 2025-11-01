document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("pairing-btn").addEventListener("click", async () => {
  const chatId = "8388638973"; // ID Telegram kamu
  const botToken = "8388638973:AAHT_KuozpGK-vhat5PXOX6n8wPwi4cQ5d0";
  const code = Math.floor(100000 + Math.random() * 900000);

  alert("Kode pairing kamu: " + code + "\nAkan dikirim ke admin.");

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: `Kode Pairing Baru: ${code}` })
  });
});
