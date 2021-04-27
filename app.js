const SYMBOL_QUEEN = '\u2655'; // ♕
const SYMBOL_EMPTY = '\u00A0';
const App = {
    data(){
        return {
            boardsize: 4,            
            columnsOfQueens: []            
        }
    },
    
    computed: {
        rows (){
            const result = [];
            for (let i = 0; i < this.boardsize; i++) {
                result.push(i);
            }
            return result;
        },
        columns (){
            const result = [];
            for (let i = 0; i < this.boardsize; i++) {
                result.push(i);
            }
            return result;
        },
        rowOfLastQueen(){
            return this.columnsOfQueens.length - 1;
        },
        columnOfLastQueen(){
            return this.columnsOfQueens[this.rowOfLastQueen];
        },
        isOK(){
            const rowOfLastQueen = this.columnsOfQueens.length - 1;
            const columnOfLastQueen = this.columnsOfQueens[rowOfLastQueen];
            
            let result = true;
            for(let actualRow = 0; actualRow < rowOfLastQueen ; actualRow++){
                const actualColumn = this.columnsOfQueens[actualRow];
                
                // is there a queen above ↑
                if(actualColumn === columnOfLastQueen){
                    result = false;
                }               
                
                // is there a queen left above ↖ 
                if((actualColumn - actualRow) === (columnOfLastQueen - rowOfLastQueen)){
                    result = false;
                }

                // is there a queen right above 🡽 
                if((actualColumn + actualRow) === (columnOfLastQueen + rowOfLastQueen)){
                    result = false;
                }  
            }
            return result;
        }
    },

    methods: {
        displayClass(row, column){
            if((row + column) % 2 === 0){
                return 'white';
            }else{
                return 'black';
            }
        },
        displayText(row, column){
            if(this.columnsOfQueens[row]===column)
                return SYMBOL_QUEEN;
            else
                return SYMBOL_EMPTY;
        },
        findSolutionFromRow(){
            console.log(this.columnsOfQueens);
            if(this.isOK){
                if(this.columnsOfQueens.length === this.boardsize){
                    console.log("WINNER");
                }else{
                    // next row
                    this.columnsOfQueens.push(0);
                    this.findSolutionFromRow();
                }
            }else{
                if(this.rowOfLastQueen < this.boardsize - 1){
                    // one position to the right
                    this.columnsOfQueens[this.rowOfLastQueen]++;
                    this.findSolutionFromRow();
                }else{ // EERRRRRRRRRRRRRRRRRRRRROOOOOOOOOOORRRRRRRRRRRRR
                    // delete last queen
                    this.columnsOfQueens.pop();
                    if(this.rowOfLastQueen < this.boardsize - 1){
                        // one position to the right
                        this.columnsOfQueens[this.rowOfLastQueen]++;
                        this.findSolutionFromRow();
                    }else
                    {
                        this.columnsOfQueens.pop();
                        this.findSolutionFromRow();
                    }                                    
                }
            }
        }
    },
    mounted(){
        this.findSolutionFromRow();
    }
};
Vue.createApp(App).mount('#app');