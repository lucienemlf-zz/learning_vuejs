<template>
  <AddQuote :addQuote="newQuote"></AddQuote>
</template>
<script>
import AddQuote from './AddQuote.vue'

export default {
  data() {
    return {
      quotes: [],
    }
  },
  methods: {
    newQuote(quote) {
      console.log('chegou no add quote', quote);
      this.quotes = [...[quote]];
      console.log('quotes', this.quotes);
    },
  },
  components: {
    AddQuote,
  },
}
</script>
