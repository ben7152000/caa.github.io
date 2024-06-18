import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import { Radio, RadioGroup, ActionSheet, Popup } from "vant";
import './styles/index.css'
import './styles/common.css'
import 'vant/lib/index.css';

createApp(App)
  .use(routers)
  .use(Radio)
  .use(RadioGroup)
  .use(ActionSheet)
  .use(Popup)
  .mount('#app')
