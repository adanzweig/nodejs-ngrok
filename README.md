# Dice Roll API

## Description
This project is a simple Node.js web server using the Express framework. It features a `/dice` POST endpoint that, when accessed, returns a random dice roll result (a number between 1 and 6). The server is integrated with `ngrok`, allowing the local server to be exposed securely over the internet.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Setup
1. Clone the repository to your local machine.
   ```
   git clone https://github.com/adanzweig/nodejs-ngrok.git
   ```
2. Navigate to the project directory.
   ```
   cd nodejs-ngrok
   ```
3. Install the required dependencies.
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node app.js
   ```
   This will start the local server and create an `ngrok` tunnel.

2. The console will display the local server URL (e.g., `http://localhost:3200`) and the `ngrok` URL.

3. To roll a dice, send a POST request to the `/dice` endpoint. This can be done using a tool like `curl` or Postman.
   ```
   curl -X POST <ngrok-url>/dice
   ```

## Contributing
Contributions to this project are welcome. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
[MIT](https://choosealicense.com/licenses/mit/)