import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Cyan
import '@11thdeg/cyan/style.css'
import '@11thdeg/cyan'

createApp(App).mount('#app')

document.body.classList.add('cyan')
document.body.classList.add('cyan--themed')
document.body.classList.add('cyan--mode--light')

