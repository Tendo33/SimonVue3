<!-- 使用 <script setup> 语法糖，这是 Vue3 中简化 Composition API 的写法 -->
<script setup lang="ts">
// 导入 HelloWorld 组件，路径为 './components/HelloWorld.vue'
import HelloWorld from "./components/HelloWorld.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
</script>

<!-- 模板部分，定义了组件的 HTML 结构 -->
<template>
	<div id="app">
		<BasicLayout />
	</div>

</template>

<!-- 使用 scoped 样式，确保样式仅作用于当前组件 -->
<style scoped>

</style>
