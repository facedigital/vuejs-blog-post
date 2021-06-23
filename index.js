// index.js
import Vue from 'vue';
import App from './src/App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');