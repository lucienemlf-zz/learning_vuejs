new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter: 0,
    result: 0,
    x: 0,
    y: 0,
  },
  methods: {
    changeGreeting: function(event) {
      this.greeting = event.target.value;
    },

    increase: function() {
      this.counter++;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alertMe: function() {
      alert('Alert');
    }
  }
})
