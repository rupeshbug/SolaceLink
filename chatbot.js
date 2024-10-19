// Toggle chat popup visibility
document.getElementById("chatbot-icon").addEventListener("click", function () {
  document.getElementById("chat-popup").style.display = "block";
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat-popup").style.display = "none";
});

// Handle sending messages
document.getElementById("send-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value;

  if (userInput.trim() !== "") {
    // Display the user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<p>${userInput}</p>`;
    document.getElementById("chatbox").appendChild(userMessage);

    // Scroll to the bottom of the chatbox
    document.getElementById("chatbox").scrollTop =
      document.getElementById("chatbox").scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Simulate bot response after a short delay
    setTimeout(function () {
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      botMessage.innerHTML = `<p>Hello</p>`;
      document.getElementById("chatbox").appendChild(botMessage);

      // Scroll to the bottom of the chatbox
      document.getElementById("chatbox").scrollTop =
        document.getElementById("chatbox").scrollHeight;
    }, 500); // 500ms delay for realism
  }
});
