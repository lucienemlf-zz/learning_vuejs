<template>
  <div class="container">
    <Progressbar :quotesSize="quotes.length" :maxQuotes="maxQuotes" />
    <AddQuote @newQuote="addQuote" />
    <ListQuote
      :quotes="quotes"
      @quoteDelete="deleteQuote"/>
    <div v-if="showInfo()" class="text-center">
      <div class="alert-info">
        {{ message }}
      </div>
    </div>
  </div>
</template>
<script>
import AddQuote from './New.vue'
import ListQuote from './List.vue'
import Progressbar from './../Progressbar.vue'

export default {
  data() {
    return {
      quotes: [
        'O que tiver de ser será',
        'Eu entrego confio agradeço'
      ],
      maxQuotes: 10,
      message: '',
    }
  },
  methods: {
    addQuote(quote) {
      console.log('size', this.quotes.length);
      if (this.quotes.length < this.maxQuotes) {
        return this.quotes.push(quote);
      }

      return this.message = "Info: O máximo de frases são `$(this.message)`";
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
      this.message = '';
    },
    showInfo() {
      return this.message.length > 1;
    }
  },
  components: {
    AddQuote,
    ListQuote,
    Progressbar,
  },
}
</script>
