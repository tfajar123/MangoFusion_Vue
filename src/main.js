import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router/routes'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useThemeStore } from './stores/themeStore'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const themeStore = useThemeStore()
if (themeStore.theme) {
  document.body.setAttribute('data-bs-theme', themeStore.theme)
}
const authStore = useAuthStore()
authStore.initialize()

app.mount('#app')
