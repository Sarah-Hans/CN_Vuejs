// rédaction du titre h1
Vue.createApp({
    data() {
        return {
            titre1: '',
            titre2: '',
            temptitre2: '',
            isRed: false,
            isImgVisible: false,
        }
    },
    methods: {
        afficherTitre2() {
            this.titre2 = this.temptitre2
            },
        }
        
}).mount('#app')

