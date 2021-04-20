const SYMBOL_QUEEN = '\u2655'; // ♕
const SYMBOL_EMPTY = '\u00A0';
const App = {
    data(){
        return {
            boardsize: 8,            
            stack: []            
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
            const columnOfActualQueen = this.stack[this.stack.length -1];
            // is there a queen above ↑
            
            // is there a queen left ←

            // is there a queen left above ↖ 
            
            // is there a queen right above 🡽

            return columnOfActualQueen;
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
            if(this.stack[row]===column)
                return SYMBOL_QUEEN;
            else
                return SYMBOL_EMPTY;
        },
        findSolutionFromRow(row){
            this.stack.push(row);
            if(row<this.boardsize-3){
                this.findSolutionFromRow(row+1)
            }
        }
    },
    mounted(){
        this.findSolutionFromRow(0);
    }
};
Vue.createApp(App).mount('#app');