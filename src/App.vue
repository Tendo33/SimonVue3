<!-- 使用 <script setup> 语法糖，这是 Vue3 中简化 Composition API 的写法 -->
<script setup>
// 导入 HelloWorld 组件，路径为 './components/HelloWorld.vue'
import HelloWorld from "./components/HelloWorld.vue";
</script>

<!-- 模板部分，定义了组件的 HTML 结构 -->
<template>
	<!-- 一个 div 容器，包含两个链接，分别指向 Vite 和 Vue 的官网 -->
	<div>
		<!-- 链接到 Vite 官网，并显示 Vite 的 logo -->
		<a href="https://vite.dev" target="_blank">
			<!-- Vite 的 logo 图片，路径为 /vite.svg，类名为 logo，alt 属性为描述文本 -->
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<!-- 链接到 Vue 官网，并显示 Vue 的 logo -->
		<a href="https://vuejs.org/" target="_blank">
			<!-- Vue 的 logo 图片，路径为 ./assets/vue.svg，类名为 logo vue，alt 属性为描述文本 -->
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<!-- 使用 HelloWorld 组件，并传入 msg prop，值为 "Vite + Vue" -->
	<HelloWorld msg="Vite + Vue" />
</template>

<!-- 使用 scoped 样式，确保样式仅作用于当前组件 -->
<style scoped>
/* 设置 .logo 类名的样式，定义图片的高度和内边距 */
.logo {
	height: 6em; /* 高度为 6em */
	padding: 1.5em; /* 内边距为 1.5em */
	will-change: filter; /* 提示浏览器优化 filter 属性的变化 */
	transition: filter 300ms; /* 定义 filter 属性的过渡效果，持续 300ms */
}

/* 当鼠标悬停在 .logo 元素上时，应用 drop-shadow 滤镜 */
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa); /* 添加蓝色阴影效果 */
}

/* 当鼠标悬停在 .logo.vue 元素上时，应用不同的 drop-shadow 滤镜 */
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa); /* 添加绿色阴影效果 */
}
</style>
