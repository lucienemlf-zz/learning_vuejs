<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <input type="text" v-model="text">
                <br>
                {{ text | revert }}

                <br>
                {{ text | count-text }}


                <p>Com computed</p>
                <br>
                {{ revertText }}
                <br>
                {{ countText }}

            </div>
        </div>
    </div>
</template>

<script>
    import { textMixin } from './textMixin.js';

    export default {
        filters: {
            revert(text){
                return text.split("").reverse().join("");
            },
        },
        mixins: [textMixin]
    }
</script>

<style>
</style>
