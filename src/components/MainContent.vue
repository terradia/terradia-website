<template>
    <div class="wrapper">
        <Tractor/>
    </div>
</template>

<script>
    import Tractor from './Tractor'
    //import InfosText from './InfosText'
    export default {
        name: "MainContent",

        components: {
            Tractor,
        }
    }
</script>

<style scoped>

    .wrapper {
        min-height: 100%;
    }

</style>