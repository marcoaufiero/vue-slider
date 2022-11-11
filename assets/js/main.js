var app = new Vue({
    el: '#root',
    data: {
        index: 0,
        timer: null,
        image: [
            {
                id: 1,
                imgPath: "./assets/img/img1.jpg"
            },
            {
                id: 2,
                imgPath: "./assets/img/img2.jpg"
            },
            {
                id: 3,
                imgPath: "./assets/img/img3.jpg"
            },
            {
                id: 4,
                imgPath: "./assets/img/img4.jpg"
            }
        ]
    },
    
    methods:{
        
        arrowRight(){
            this.index++;
            if(this.index >= this.image.length){
                this.index = 0;
            }
        },
        arrowLeft(){
            this.index--;
            if(this.index < 0){
                this.index = 3;
            }
        },
        prova(x){
            this.index = x;
        }
    }
})