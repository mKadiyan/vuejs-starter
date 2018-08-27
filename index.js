new Vue({
    el: '#app',
    data:{
        title: 'This is my title'
    },
    methods:{
        changeTitle: function(event){
            this.title =  event.target.value;
        }
    }
});