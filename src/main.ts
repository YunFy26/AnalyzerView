import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFolder,
  faMagnifyingGlass,
  faRoute,
  faPuzzlePiece,
  faArrowsToCircle,
  faDiagramProject,
  faScissors,
  faRobot,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons'
import '../tailwind.css'

// 添加图标到库中
library.add(
  faFolder,
  faMagnifyingGlass,
  faRoute,
  faPuzzlePiece,
  faArrowsToCircle,
  faDiagramProject,
  faScissors,
  faRobot,
  faShieldHalved
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
