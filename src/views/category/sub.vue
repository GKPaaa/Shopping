<script lang="ts" setup name="SubCategory">
const props = defineProps<{ id: number | string }>()
</script>
<template>
    <div class="category">二级分类组件-----{{ id }}</div>
</template>

<style>
</style>