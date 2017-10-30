new Vue({
  el: '#exercise',
  data: {
      value: '',
  },
  methods: {
    showAlert() {
      alert('alert');
    },
    storeData(event) {
      this.value = event.target.value;
    }
  }
});
