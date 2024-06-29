import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


import "./scss/style.scss";
import router from "./router/index";

import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from './components/layouts/TheFooter.vue';

// createApp(App).mount('#app')
const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);

app.use(router);

app.mount("#app");
