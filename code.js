//экземпляр - это объект, созданный
//функцией конструктором( в нашем случае Vue)

const calc = new Vue({
    // el - свойство,
    // куда передается DOM элемент
    //и будет писаться Vue
    el: '#app',
    // data = набор информации для экземпляра
    data:{
        x:0,
        y:0,
        res:0,
    },
    //computed - постоянно вычисляемые значения
    computed:{
        result: function(){
            return `Результат сложения ${+this.x + +this.y}`;
        },
    },
    // методы, которые вычисляются по вызову
    methods:{
        mult(){
            this.res = +this.x * +this.y;
        },
        division(){
            this.res = +this.x / +this.y;
        }
        
    }

})