new Vue({
  el: '#exercise',
  data: {
      value: 0,
  },
  computed: {
    result() {
      return this.value > 37 ? 'done' : 'not there yet';
    }
  },
  watch: {
    result() {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
        },5000)
    }
  }
});
