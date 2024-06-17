import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import { Radio, RadioGroup } from "vant";
import './styles/index.css'
import './styles/common.css'
import 'vant/lib/index.css';

createApp(App)
  .use(routers)
  .use(Radio)
  .use(RadioGroup)
  .mount('#app')
