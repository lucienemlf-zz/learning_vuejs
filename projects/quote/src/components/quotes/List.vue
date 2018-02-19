<template>
  <div>
    <div v-for="(quote, index) in quotes">
      <button
        class="card"
        @click="deleteQuote(index)">
        {{ quote }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      quotes: {
        type: Array,
        required: true,
      },
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDelete', index);
      },
    },
  }
</script>

<style scoped>
  .panel-body {
    font-family: 'Arizona', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
