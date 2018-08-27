new Vue({
  el: "#app",
  data: {
    title: "This is my title",
    link: 'https://www.google.com'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
        this.title = 'Hello World!';
        return this.title;
    }
  }
});
