<template>
  <div>
    <h3>Quotes added</h3>
    <div class="progress">
      <div class="progress-bar" :style="{width: (quotesSize/maxQuotes) * 100 + '%'}">
        {{ quotesSize }} / {{ maxQuotes }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      quotesSize: {
        type: Number,
        required: true,
      },
      maxQuotes: {
        type: Number,
        required: true,
      }
    },
  }
</script>

<style scoped>
  .progress-bar {
    width: 10%;
  }
</style>
