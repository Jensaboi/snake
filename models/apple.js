import { randomTimes} from "../utils/utils.js";
import { BOXSIZE, COLS, ROWS } from "../game.js";

export class Apple {
    color = "rgb(172, 28, 28)";

    constructor(cols,rows, boxsize) {
        this.x = cols * boxsize;
        this.y = rows * boxsize;
    }

    spawnRandomApple() {
        this.x = randomTimes(COLS) * BOXSIZE;
        this.y = randomTimes(ROWS) * BOXSIZE;
    }

    isEaten(snakeX, snakeY) {
        if (this.x === snakeX && this.y === snakeY) {
            return true;
        }
    }
}
