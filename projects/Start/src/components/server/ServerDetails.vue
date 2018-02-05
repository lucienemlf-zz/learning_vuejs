<template>
  <div>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details - id: {{ server.id }} status: {{ server.status }} </p>
        <button
          @click="changeStatus"
          class="btn btn-info">Change status to nornal</button>
    </div>
  </div>
</template>

<script>
  import { serverBus } from '../../main';

  export default {
    data() {
      return {
        server: null,
      };
    },
    created() {
      serverBus.$on('setCurrentServer', (server) => {
        this.server = server;
      });
    },
    props: {
      details: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      changeStatus() {
        this.server.status = 'Normal';
      },
    }
  }
</script>

<style scoped>
</style>
