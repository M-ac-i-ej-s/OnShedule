import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// VueDatePicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
        mdi,
        }, // This is already the default value - only for display purposes
    },
})

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.use(vuetify).use(router).mount('#app')