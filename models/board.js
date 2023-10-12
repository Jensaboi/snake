export class Board {
    constructor(rows, cols, boxsize) {
        this.width = boxsize * cols;
        this.height = boxsize * rows;
    }
}
