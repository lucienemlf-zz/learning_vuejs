<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button
                    @click="switchComponent('appBlue')"
                    class="btn btn-primary">Load Blue Template</button>
                <button
                    @click="switchComponent('appGreen')"
                    class="btn btn-success">Load Green Template</button>
                <button
                    @click="switchComponent('appRed')"
                    class="btn btn-danger">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="header">Header</h2>
                        <h2>Vai ser renderizado no filho</h2>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selectedComponent: 'appBlue',
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            switchComponent(component) {
                this.selectedComponent = component;
                console.log('component name', this.selectedComponent)
            },
        }
    }
</script>

<style>
</style>
