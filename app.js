const SYMBOL_QUEEN = '\u2655'; // ♕
SYMBOL_EMPTY = '\u00A0';
const App = {
    data(){
        return {
            breite: 8,            
            stack: []
        }
    },
    
    computed: {
        zeilen (){
            const result = [];
            for (let i = 0; i < this.breite; i++) {
                result.push(i);
            }
            return result;
        },
        spalten (){
            const result = [];
            for (let i = 0; i < this.breite; i++) {
                result.push(i);
            }
            return result;
        }

    },

    methods: {
        klasse(zeile, spalte){
            if((zeile + spalte) % 2 === 0){
                return 'white';
            }else{
                return 'black';
            }
        },
        text(zeile, spalte){
            if(this.stack[zeile]===spalte)
                return SYMBOL_QUEEN;
            else
                return SYMBOL_EMPTY;
        },
        loesegame(zeile){
            console.log(zeile);
            this.stack.push(zeile);
            if(zeile<8){
                this.loesegame(zeile+1)
            }
        }
    },
    mounted(){
        this.loesegame(0);
    }
};
Vue.createApp(App).mount('#app');