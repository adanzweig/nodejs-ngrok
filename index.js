// Importing the necessary modules
const express = require('express'); // Express framework for building web applications
const ngrok = require('ngrok'); // ngrok module to expose your local server to the internet
const app = express(); // Create an instance of Express

// Define a POST endpoint '/dice'
app.post('/dice', (req, res) => {
    const randomDice = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    res.send(`Dice rolled: ${randomDice}`); // Send the response with the dice roll result
});

// Set the port for the server
const PORT = process.env.PORT || 3200; // Use the PORT environment variable or default to 3200

// Start the Express server
app.listen(PORT, () => {
    console.log(`Localhost running on: http://localhost:${PORT}`); // Log the local server URL

    // Connect to ngrok to expose the server publicly
    ngrok.connect(PORT).then(ngrokUrl => {
        console.log(`Ngrok tunnel in: ${ngrokUrl}`); // Log the ngrok URL once the tunnel is established
    }).catch(error => {
        console.log(`Couldn't tunnel ngrok: ${error}`); // Log an error if ngrok fails to start
    });
});
