function sendMessage() {
    const input = document.getElementById('chatbox-input');
    const messages = document.getElementById('chatbox-messages');

    if (input.value.trim() !== '') {
        const message = document.createElement('div');
        message.className = 'chatbox-message sent';
        message.innerHTML = `
            ${input.value}
            <span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
        `;
        messages.appendChild(message);

        // Scroll to the bottom
        messages.scrollTop = messages.scrollHeight;

        // Clear the input
        input.value = '';
    }
}

// Optional: Add event listener to send message on Enter key
document.getElementById('chatbox-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
