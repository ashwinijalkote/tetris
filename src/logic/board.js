function Board() {
    this.matrix = [];
    for(int i=0; i< 20; i++) {
        this.matrix[i] = [];
        for(int j=0; j < 10; j++) {
            this.matrix[i][j] =0;
        }
    }
    this.score = 0;
}

Board.prototype = {

    isGameOver: function() {

    },

    lineComplete: function() {

    },

    getNextShape: function() {

    },

    resetBoard: function(matrix, score) {

    },

    initBoard: function() {

    }

}

Board b = new Board();
export b;
