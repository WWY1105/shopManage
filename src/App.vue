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
        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem('store')) {
            this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
        }

        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('store', JSON.stringify(this.$store.state));
        });
    },
    components: {

    },

};
</script>

<style>
#app {
    background-color: rgb(244, 244, 244);
    font-size: 14px;
}
</style>
