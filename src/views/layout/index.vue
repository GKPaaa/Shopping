<template>
    <TopNav></TopNav>
    <Header></Header>
    <appHeaderStickyVue ></appHeaderStickyVue>
    <main class="app-body">
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <Footer></Footer>
</template>

<script setup lang="ts" name="Layout">
import TopNav from './components/app-topnav.vue'
import Header from './components/app-header.vue'
import Footer from './components/app-footer.vue'
import appHeaderStickyVue from './components/app-header-sticky.vue';


</script>

<style scoped lang="less">
</style>
