function sendMsg() {
  let input = document.getElementById("msgInput");
  let msg = input.value.trim();


  if (!msg) return;

  let box = document.getElementById("chatBox");

  let msgDiv = document.createElement("div");
  msgDiv.className = "message right";
  msgDiv.innerText = msg;

  box.appendChild(msgDiv);
  input.value = "";

  box.scrollTop = box.scrollHeight;
}
