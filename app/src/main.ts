import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'

createApp(App).mount('#app')
// @ts-ignore
const Neutralino: any = window.Neutralino
Neutralino.init()
Neutralino.events.on('windowClose', () => {
  Neutralino.app.exit()
})
