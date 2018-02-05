<template>
    <div class="container">
        <Header></Header>
        <Servers></Servers>
        <Footer></Footer>
    </div>
</template>

<script>
    import Servers from './components/server/Servers.vue'
    import Header from './components/shared/Header.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        components: {
            Header,
            Footer,
            Servers,
        }
    }
</script>

<style>

</style>
