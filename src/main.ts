import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Quasar } from 'quasar'
import '@/utils/quasar'
import '@/assets/scss/base.scss'
import { quasarConfig } from '@/utils/quasar'
// if you're using CDN, please remove this line.

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Quasar, quasarConfig)

app.use(createPinia())
app.use(router)

app.mount('#app')
