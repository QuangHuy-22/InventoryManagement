import Vue from 'vue'
import "./plugins/vuetify.js"
import App from './App.vue'
import router from './router'
import store from './store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { BootstrapVueIcons, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue';
import "./assets/css/style-custom.css"
import Vuelidate from 'vuelidate'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { VueResponsiveComponents } from "vue-responsive-components"
import UUID from 'vue-uuid'
import excel from 'vue-excel-export'
import './vue-filter/index.js'
// import { hello } from './server.js'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCookies from 'vue-cookies';

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
library.add(faUserSecret)
Vue.config.productionTip = false
Vue.use(VueCookies);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(excel)
Vue.use(UUID);
Vue.use(VueResponsiveComponents)
Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
Vue.use(BootstrapVueIcons)
Vue.use(VueSidebarMenu)

new Vue({
    router,
    store,
    render: h => h(App),
    // mounted() {
    // hello(8082)
    // }
}).$mount('#app')

// const hello = require('../server');
// hello()