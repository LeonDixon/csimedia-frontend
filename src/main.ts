import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faSearch, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram, faGooglePlusG} from '@fortawesome/free-brands-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faBars, faSearch, faPhone, faFacebookF, faTwitter, faInstagram, faGooglePlusG)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
