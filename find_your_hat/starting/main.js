const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


/* Todo: seems like too much of a god-class. Codecademy seemed to want it all in the 'Field' class. */

class Field {
    constructor(fieldArray) {
        this._field = fieldArray;
        this._playerXPos = 0;
        this._playerYPos = 0;
        this._prompt = require('prompt-sync')();
        this._gameOver = false;
    }

    /**
     * Static method that generates a 2D array representing a field.
     * 
     * @param {number} height number of rows in the matrix
     * @param {number} width number of columns per row of matrix
     * @param {number} holesPercentage integer in [0..100] representing percentage of field that should be holes
     */

    static generateField(height, width, percentage=25) {
        let field = [];

        /* Generate a random row, col pair at which to place the hat. This isn't uniformly distributed as done here--
        too high a probability of placing it in the first row (because the row is chosen randomly, and then the column is chosen
            from among the columns that aren't 0 if the row is 0). */
        const hatRow = Math.floor(Math.random() * height);
        let hatCol;
        if (hatRow == 0) { // don't place hat at (0, 0), where player starts
            hatCol = Math.floor(Math.random() * (width - 1) + 1);
        } else {
            hatCol = Math.floor(Math.random() * (width - 0) + 0);
        }


        let openFieldIndices = []; // Array of eligible coordinate pairs at which the hat could be placed
        for (let row = 0; row < height; row++) {
            let columns = [];
            for (let col = 0; col < width; col++) {
                let rand = Math.random();
                if ((row == hatRow) && (col == hatCol)) {
                    columns.push(hat);
                } else if (rand < (percentage / 100)) {
                    columns.push(hole);
                } else {
                    columns.push(fieldCharacter)
                }
            }
            field.push(columns); // add the row's column values
        }

        // Overwrite [0][0] to be the player starting location
        field[0][0] = '*';

        return field;
    }

    /**
     * Main game loop.
     */
    mainLoop() {
        while (!this._gameOver) {
            this.updateField();
            this.printField();
            this.inputMove();
            this.considerPosition();
        }
    }

    /**
     * Updates the player-position trail on the field array.
     */
    updateField() {
        this._field[this._playerYPos][this._playerXPos] = '*'; // Y comes before X here because 2D array is [row][col]
    }

    /**
     * Outputs current state of the field to the console.
     */
    printField() {
        this._field.forEach(element => {
            console.log('\t' + element.join(''));
            
        });
    }

    /**
     * Gets player move input and adjusts x and y position accordingly.
     */
    inputMove() {
        let move = this._prompt('Enter move: ');
        move = move.toLowerCase();
        switch (move) {
            case 'w':
                this._playerYPos -= 1; /* (0, 0) is the top left corner, so player's "up" is a decrease in y coordinate
                for purposes of the 2D array that represents the field */
                break;
            case 'a':
                this._playerXPos -= 1;
                break;
            case 's':
                this._playerYPos += 1;
                break;
            case 'd':
                this._playerXPos += 1;
                break;
            default:
                console.log('Invalid move. Enter w, a, s, or d.');
        }

    }

    /**
     * Tests whether current location results in win (player position is
     * hat position) or loss (player position is hole or out of bounds).
     * 
     */
    considerPosition() {
        if ((this._playerYPos > this._field.length - 1) ||
            (this._playerYPos < 0) ||
            (this._playerXPos > this._field[0].length - 1) ||
            (this._playerXPos < 0)) {
                console.log('Gameover -- Out of bounds!');
                this._gameOver = true;
            } else if (this._field[this._playerYPos][this._playerXPos] == 'O') {
                console.log('Gameover -- fell in hole!');
                this._gameOver = true;
            } else if (this._field[this._playerYPos][this._playerXPos] == '^') {
                console.log('Found the hat -- you win!');
                this._gameOver = true;
            }
    }

}


const fieldArray = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]

function tests() {
    const myField = new Field(fieldArray);
    console.log(`character at field[0][0] = ${myField._field[0][0]}`);
    const genField = Field.generateField(4, 4);
    console.log(genField);
    myField.mainLoop();
}

tests();