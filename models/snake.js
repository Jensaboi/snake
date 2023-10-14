import { BOXSIZE } from "../game.js";

export class Snake {
    //snake colors
    headColor = "rgb(79, 190, 75)";
    bodyColor = "rgb(30, 114, 27)";

    //snake directions
    direction = "RIGHT";
    lastDirection = this.direction;
    directionQues = [];

    score = 0;

    constructor(startingRow, startingCol, boxsize) {
        this.x = startingRow * boxsize;
        this.y = startingCol * boxsize;
        this.boxsize = boxsize;

        //starting snake size
        this.body = [
            { x: this.x, y: this.y },
            { x: (this.x - 1) * boxsize, y: this.y },
            { x: (this.x - 2) * boxsize, y: this.y },
        ];
    }

    move() {
        
        if (this.directionQues.length) {

            this.lastDirection = this.direction;
            this.direction = this.directionQues.shift();

            //fixs to movement bugg
            if(this.lastDirection === "UP" && this.direction === "DOWN"){
                this.direction = this.lastDirection
            }else if(this.lastDirection === "DOWN" && this.direction === "UP"){
                this.direction = this.lastDirection
            }else if(this.lastDirection === "RIGHT" && this.direction === "LEFT"){
                this.direction = this.lastDirection
            }else if(this.lastDirection === "LEFT" && this.direction === "RIGHT"){
                this.direction = this.lastDirection
            }   
        }

        switch (this.direction) {
            case "RIGHT":
                this.x += BOXSIZE;
                break;
            case "LEFT":
                this.x -= BOXSIZE;
                break;
            case "UP":
                this.y -= BOXSIZE;
                break;
            case "DOWN":
                this.y += BOXSIZE;
                break;
        }
    }

    changeDirection(direction) {
        if (direction === "UP" && this.direction === "DOWN") {
            // Do nothing
        } else if (direction === "DOWN" && this.direction === "UP") {
            // Do nothing
        } else if (direction === "RIGHT" && this.direction === "LEFT") {
            // Do nothing
        } else if (direction === "LEFT" && this.direction === "RIGHT") {
            // Do nothing
        } else {
            this.directionQues.push(direction);
        }
    }

    moveSnake() {
        this.grow();
        this.body.pop();
    }

    grow() {
        let currHeadPos = { x: this.x, y: this.y };
        this.body.unshift(currHeadPos);
    }

    checkWallCollision(boardWidth, boardHeight) {
        if (
            this.x + BOXSIZE > boardWidth ||
            this.x < boardWidth - boardWidth ||
            this.y + BOXSIZE > boardHeight ||
            this.y < boardHeight - boardHeight
        ) {
            return true;
        }
        return false;
    }

    gameOverResetPos(startPosX, startPosY) {
        this.x = startPosX * this.boxsize;
        this.y = startPosY * this.boxsize;
        this.body = [
            { x: startPosX * this.boxsize, y: startPosY * this.boxsize },
            { x: (startPosX - 1) * this.boxsize, y: startPosY * this.boxsize },
            { x: (startPosX - 2) * this.boxsize, y: startPosY * this.boxsize },
        ];
    }

    checkSelfCollision() {
        for (let i = 2; i < this.body.length; i++) {
            if (this.x === this.body[i].x && this.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}
