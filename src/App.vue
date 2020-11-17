<template>
<div id="app">
    <el-container>
        <el-aside width="260px" style="min-height:100vh;background-color:#235676">
            <Aside />
        </el-aside>
        <el-container>
            <el-header height="100px">
                <Header/>
            </el-header>
            <el-main style="background:#F4F4F4">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import Aside from '@/components/Aside'
import Header from '@/components/Header'
export default {
    name: "App",
    components: {
        Aside,
        Header
    }
};
</script>

<style>

</style>
