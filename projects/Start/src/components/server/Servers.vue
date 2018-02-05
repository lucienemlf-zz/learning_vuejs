<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="server in servers">
          <ServerStatus :server='server' @showDetails="detailsShow"></ServerStatus>
        </li>
      </ul>
    </div>
    <ServerDetails :details="details"></ServerDetails>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue'
  import ServerDetails from './ServerDetails.vue'

  export default {
    data() {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknow'},
          {id: 4, status: 'Normal'}
        ],
        details: false,
      };
    },
    components: {
      ServerStatus,
      ServerDetails,
    },
    methods: {
      detailsShow(event) {
        this.details = event;
      }
    }
  }
</script>
