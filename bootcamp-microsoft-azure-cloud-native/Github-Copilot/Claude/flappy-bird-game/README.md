# FlapBird Game

FlapBird is a simple and fun web-based game inspired by the classic Flappy Bird. The objective of the game is to navigate a bird through a series of pipes without colliding with them. The game is built using HTML, CSS, and JavaScript.

## Project Structure

The project consists of the following files and directories:

- `index.html`: The main HTML document that sets up the structure of the game.
- `css/style.css`: Contains the styles for the game, including layout, colors, and animations.
- `js/game.js`: The main game logic that initializes the game, handles user input, updates the game state, and manages the game loop.
- `js/bird.js`: Exports a class `Bird` that represents the player character with properties like position and velocity, and methods such as `flap()` and `update()`.
- `js/pipes.js`: Exports a class `Pipes` that manages the obstacles in the game, with methods like `createPipe()` and `update()`.
- `assets/sounds`: Directory containing sound files used in the game, such as background music and sound effects for flapping and collisions.

## How to Play

1. Open `index.html` in your web browser.
2. Press the spacebar or click the mouse to make the bird flap its wings and rise.
3. Navigate the bird through the gaps between the pipes.
4. Try to achieve the highest score possible without hitting the pipes!

## Development

This game was developed as a fun project to practice JavaScript and game development concepts. Feel free to modify and enhance the game as you see fit! 

## License

This project is open-source and available for anyone to use and modify. Enjoy!