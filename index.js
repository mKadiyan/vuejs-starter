new Vue({
  el: "#app",
  data: {
    title: "This is my title",
    link: 'https://www.google.com',
    finishedLink: '<a href="https://www.google.com">Finished Link</a>'
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
