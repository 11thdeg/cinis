import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './views/routes'
import { createI18n } from 'vue-i18n'

// Cyan
import '@11thdeg/cyan/style.css'
import '@11thdeg/cyan'
import { fi } from './locales/fi'

// Router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const i18n = createI18n({
  legacy: false,
  locale: 'fi',
  messages: {
    fi: {...fi}
  }
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

document.body.classList.add('cyan')
document.body.classList.add('cyan--themed')
document.body.classList.add('cyan--mode--light')

