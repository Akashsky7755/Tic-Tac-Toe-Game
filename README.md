from pathlib import Path

readme = """# Tic Tac Toe

A responsive Tic Tac Toe game built using HTML, CSS, and JavaScript.

## Features

- Two-player Tic Tac Toe game
- X and O turn indicator
- Automatic winner detection
- Draw detection
- Reset Game button
- New Game button
- Responsive design for mobile, tablet, and desktop
- Interactive game board

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Play

1. Player X starts the game.
2. Click on any empty box to place your mark.
3. The turn automatically switches between X and O.
4. The first player to complete a row, column, or diagonal wins.
5. If all 9 boxes are filled without a winner, the match is a draw.
6. Use **Reset Game** or **New Game** to start again.

## Winning Patterns

The game checks these 8 possible winning combinations:

- Rows
- Columns
- Diagonal from top-left to bottom-right
- Diagonal from top-right to bottom-left

## Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── app.js
└── README.md