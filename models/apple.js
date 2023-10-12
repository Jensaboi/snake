import { randomTimesRows, randomTimesCols } from "../utils/utils.js";
import { BOXSIZE } from "../game.js";

export class Apple {
    color = "rgb(172, 28, 28)";

    constructor(rows, cols, boxsize) {
        this.x = cols * boxsize;
        this.y = rows * boxsize;
    }

    spawnRandomApple() {
        this.x = randomTimesRows() * BOXSIZE;
        this.y = randomTimesCols() * BOXSIZE;
    }

    isEaten(snakeX, snakeY) {
        if (this.x === snakeX && this.y === snakeY) {
            return true;
        }
    }
}
