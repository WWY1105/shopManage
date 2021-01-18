<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            let title = to.meta.title ? to.meta.title : '';
            this.$store.dispatch('setTitle', title)
            next();
            console.log(this.$store.state);
        });
    },
    components: {

    },
   
};
</script>

<style>
#app {
    background-color: rgb(244, 244, 244);
}
</style>
