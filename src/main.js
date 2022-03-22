import { createApp } from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'

const app = createApp(App)
app.use(BootstrapVue3, axios, VueAxios)
app.mount('#app')

