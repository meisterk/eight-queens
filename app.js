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
            if(row<8){
                this.findSolutionFromRow(row+1)
            }
        }
    },
    mounted(){
        this.findSolutionFromRow(0);
    }
};
Vue.createApp(App).mount('#app');