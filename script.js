document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatWindow = document.getElementById('chat-window');

    // Simulating AI response
    chatWindow.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatWindow.innerHTML += `<p><strong>AI:</strong> Let me check if your game is enjoyable...</p>`;

    // Simulate AI processing and game evaluation
    setTimeout(() => {
        chatWindow.innerHTML += `<p><strong>AI:</strong> Your game is ready! Enjoy!</p>`;
        document.getElementById('ai-chat').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
        // Here you can add your game logic
    }, 2000); // Simulate delay

    document.getElementById('user-input').value = ''; // Clear input
});

document.getElementById('back-to-ai').addEventListener('click', function() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('ai-chat').style.display = 'block';
});
