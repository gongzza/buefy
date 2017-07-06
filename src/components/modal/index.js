import Vue from 'vue'
import Modal from './Modal'
import config from '../../utils/config'

export { Modal }
export default {
    open(params) {
        let content
        if (typeof params === 'string') content = params

        const defaultParam = {
            programmatic: true,
            content
        }
        const propsData = Object.assign(defaultParam, params)

        const ModalComponent = Vue.extend(Modal)
        return new ModalComponent({
            el: document.createElement('div'),
            propsData,
            store: config.store
        })
    }
}
