<template>
    <div class="container">
        <Header></Header>
        <div class="row">
            <ServerStatus></ServerStatus>
            <ServerDetails></ServerDetails>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import ServerStatus from './components/server/ServerStatus.vue'
    import ServerDetails from './components/server/ServerDetails.vue'
    import Header from './components/shared/Header.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        components: {
            Header,
            Footer,
            ServerStatus,
            ServerDetails,
        }
    }
</script>

<style>

</style>
