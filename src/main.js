import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routers from './routers/routers'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all desired icons */
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add all icons to the library */
library.add(far, fas, fab)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(routers)
    .mount('#app')
