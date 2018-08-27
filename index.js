new Vue({
  el: "#app",
  data: {
    title: "This is my title",
    link: "https://www.google.com",
    finishedLink: '<a href="https://www.google.com">Finished Link</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      this.title = "Hello World!";
      return this.title;
    }
  }
});

new Vue({
  el: "#exercise",
  data: {
      name: 'Ravinder Kadiyan',
      age: 22,
      myImage: 'https://cdn.tinybuddha.com/wp-content/uploads/2015/10/Having-Fun.png'
  },
  methods: {
      getRandomNumber: function(){
          return Math.random();
      }
  }
});
