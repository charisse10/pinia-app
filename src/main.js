import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')

// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')

