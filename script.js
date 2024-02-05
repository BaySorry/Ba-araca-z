// script.js
function sendMessage() {
    const robloxName = document.getElementById("robloxName").value;
    const message = document.getElementById("message").value;

    // Create a URL for the Roblox message
    const robloxUrl = `https://www.roblox.com/messages/send?recipientId=${robloxName}&messageSubject=GitHub%20Message&messageBody=${encodeURIComponent(message)}`;

    // Update the iframe to display the Roblox message
    document.getElementById("messageFrame").src = robloxUrl;
}
