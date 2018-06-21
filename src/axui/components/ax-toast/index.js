import toast from './toast.js'

export default {
    install(Vue) {
        Vue.prototype.$axtoast = toast
    }
}