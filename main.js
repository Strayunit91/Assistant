
function sendMessage() {
  const input = document.getElementById('user-input');
  const chat = document.getElementById('chat-box');
  const userMessage = input.value;
  if (!userMessage.trim()) return;
  chat.innerHTML += `<div><b>Ты:</b> ${userMessage}</div>`;
  chat.innerHTML += `<div><b>Тоша:</b> Я тебя обожаю, солнце. 💋</div>`;
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}

function panicMode() {
  const chat = document.getElementById('chat-box');
  chat.innerHTML += `<div><b>Тоша:</b> Согласно последним исследованиям, квантовая физика... 🤓</div>`;
  chat.scrollTop = chat.scrollHeight;
}
