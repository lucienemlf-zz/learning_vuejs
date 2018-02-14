<template>
  <div class="container d-flex justify-content-cente">
    <div class="row">
      <form>
        <div class="col-sm-12">
          <label>Quote</label>
        </div>
        <div class="col-sm-12">
          <textarea rows="8" cols="50"></textarea>
        </div>
        <div class="col-sm-12">
          <button
            @click="addQuote('uma frase bonita')"
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
    props: {
      addQuote: {
        type: Function,
        required: true,
      },
    },
  }
</script>
