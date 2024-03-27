import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import zhTW from 'quasar/lang/zh-TW'
import { Dialog, Notify, Loading } from 'quasar'
export const quasarConfig = {
  plugins: { Notify, Dialog, Loading },
  lang: zhTW
}
