<!-- 使用 <script setup> 语法糖，这是 Vue3 中简化 Composition API 的写法 -->
<script setup>
// 从 Vue 中导入 ref 函数，用于创建响应式数据
import { ref } from 'vue';

// 使用 defineProps 定义组件的 props，这里定义了一个名为 msg 的 prop，类型为 String
defineProps({
  msg: String,
});

// 使用 ref 创建一个响应式变量 count，初始值为 0
const count = ref(0);
</script>

<!-- 模板部分，定义了组件的 HTML 结构 -->
<template>
  <!-- 显示传入的 msg prop 的值 -->
  <h1 v-show="true">{{ msg }}</h1>

  <!-- 一个卡片区域 -->
  <div v-if="true" class="card">
    <!-- 按钮，点击时 count 的值会自增 -->
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- 提示信息，用户可以编辑 components/HelloWorld.vue 文件来测试热模块替换（HMR） -->
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <!-- 提示信息，包含一个链接，指向 Vue 官方快速入门指南 -->
  <p v-if="true">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <!-- 提示信息，包含一个链接，指向 Vue 文档中关于 IDE 支持的部分 -->
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <!-- 提示信息，提示用户可以点击 Vite 和 Vue 的 logo 了解更多 -->
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<!-- 使用 scoped 样式，确保样式仅作用于当前组件 -->
<style scoped>
/* 设置 .read-the-docs 类名的文本颜色为灰色 */
.read-the-docs {
  color: #888;
}
</style>
