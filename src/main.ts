import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Define theme
const lightTheme = {
  dark: false,
  colors: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#F5F5F5',
  }
}

const darkTheme = {
  dark: true,
  colors: {
    primary: '#2196F3',
    secondary: '#757575',
    accent: '#FF4081',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#121212',
  }
}

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  }
})

// Create and mount app
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
