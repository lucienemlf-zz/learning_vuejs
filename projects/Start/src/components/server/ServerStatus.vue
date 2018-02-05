<template>
  <div>
    Server #{{ server.id }}
    <button
      @click="detailsShow"
      class="btn btn-info"> Show Details </button>
  </div>
</template>

<script>
  import { serverBus } from '../../main';

  export default {
    props: {
      server: {
        type: Object,
        required: true,
      }
    },
    methods: {
      detailsShow() {
        serverBus.$emit('setCurrentServer', this.server);
      }
    }
  }
</script>

<style scoped>
</style>
