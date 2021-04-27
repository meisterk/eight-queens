const SYMBOL_QUEEN = '\u2655'; // ♕
const SYMBOL_EMPTY = '\u00A0';
const App = {
    data(){
        return {
            boardsize: 8,            
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
        findSolutionFromRow(row){
            
        }
    },
    mounted(){
        this.findSolutionFromRow(0);
    }
};
Vue.createApp(App).mount('#app');