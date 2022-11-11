var app = new Vue({
    el: '#root',
    data: {
        index: 0,
        clear: 0,
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
    mounted(){
        this.startInterval();
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
        active(x){
            this.index = x;
        },
        stopInterval(){
            clearInterval(this.clear)
        },
        startInterval(){
            this.clear = setInterval(this.arrowRight, 1000)
        }
    }
})