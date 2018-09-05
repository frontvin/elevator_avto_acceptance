import Vue from 'vue'
import Element from 'element-ui'
import locale from 'node_modules/element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
}
