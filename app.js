const SYMBOL_QUEEN = '\u2655'; // ♕
const SYMBOL_EMPTY = '\u00A0';
const App = {
    data(){
        return {
            boardsize: 8,            
            columnsOfQueens: [],
            noSolution: false           
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
        
        isCorrect(chessPosition){
            const rowOfLastQueen = chessPosition.length - 1;
            const columnOfLastQueen = chessPosition[rowOfLastQueen];
            
            let result = true;
            for(let actualRow = 0; actualRow < rowOfLastQueen ; actualRow++){
                const actualColumn = chessPosition[actualRow];
                
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
        },

        getSolutions(boardsize){
            // DFS
            const solutions = []
            const stack = [];
            const firstElement = [];            
            stack.push(firstElement);            
            while(stack.length > 0){
                x = stack.pop();                
                if(x.length < boardsize){ 
                    for(let i = 0; i < boardsize; i++){
                        const child = [... x]; // clone x
                        child.push(i);                        
                        if(this.isCorrect(child)){                            
                            stack.push(child);
                            if(child.length === boardsize){
                                solutions.push(child);
                            }
                        }                        
                    }
                }                             
            }
            return solutions;
        }
    },

    mounted(){
        const solutions = this.getSolutions(this.boardsize);
        if(solutions.length > 0){
            this.columnsOfQueens = solutions[0];
        }else{
            this.noSolution = true;
        }
    }
};
Vue.createApp(App).mount('#app');