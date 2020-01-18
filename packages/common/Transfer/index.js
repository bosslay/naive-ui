/* istanbul ignore file */
import Transfer from './src/Transfer.vue'
import installPropsUnsafeTransition from '../../utils/installPropsUnsafeTransition'

Transfer.install = function (Vue) {
  installPropsUnsafeTransition(Vue)
  Vue.component(Transfer.name, Transfer)
}

export default Transfer
