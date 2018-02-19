<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <form>
        <div class="col-sm-12">
          <label>Quote</label>
        </div>
        <div class="col-sm-12">
          <textarea
            rows="8"
            cols="50"
            class="form-control"
            v-model="quote">
          </textarea>
        </div>
        <div class="col-sm-12 text-center">
          <button
            @click.prevent="createNew"
            class="btn btn-primary">
            Add Quote
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: '',
      };
    },
    methods: {
      createNew() {
        this.$emit('newQuote', this.quote);
        this.quote = '';
      },
    },
  }
</script>

<style scopded >
  label {
    font-weight: bold;
  }

  .container {
    padding: 20px 0px;
  }

  button {
    margin-top: 10px;
  }
</style>
