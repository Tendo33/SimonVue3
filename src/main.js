// 导入 Vue 的 createApp 函数，用于创建 Vue 应用实例
import { createApp } from 'vue';

// 导入全局样式文件 style.css，该文件包含整个应用的样式
import './style.css';

// 导入根组件 App.vue，这是 Vue 应用的入口组件
import App from './App.vue';

// 导入 ant-design-vue 库，这是一个基于 Vue 的 UI 组件库
import Antd from 'ant-design-vue';

// 导入 ant-design-vue 的样式重置文件 reset.css，用于统一不同浏览器的默认样式
import 'ant-design-vue/dist/reset.css';

// 使用 createApp 函数创建 Vue 应用实例，传入根组件 App
const app = createApp(App);

// 使用 app.use() 方法将 ant-design-vue 组件库注册为全局插件
// 这样可以在整个应用中使用 ant-design-vue 提供的组件
app.use(Antd);

// 将 Vue 应用挂载到 HTML 中 id 为 'app' 的 DOM 元素上
// 这意味着 Vue 应用的所有内容将渲染到这个元素内部
app.mount('#app');
