import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/global.css'

import { resgisterGlobalComponent } from '@/utils/import'

const app = createApp(App)

resgisterGlobalComponent(app)

app.use(router)

app.mount('#app')
