import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './views/routes'

// Cyan
import '@11thdeg/cyan/style.css'
import '@11thdeg/cyan'

// Router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

document.body.classList.add('cyan')
document.body.classList.add('cyan--themed')
document.body.classList.add('cyan--mode--light')

