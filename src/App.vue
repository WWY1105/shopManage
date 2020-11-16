<template>
<div id="app">
    <el-container>
        <el-aside width="260px" style="background-color:#235676">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>

</style>
