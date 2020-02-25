import Window from '@/common/window'

function Modal (Vue, config) {
  if (Window.isFake) return

  let defaultConfig = { target: Window.document.body, autoDestroy: true }
  this.config = Object.assign({}, defaultConfig, config)

  this.modalEl = Window.document.createElement('div')
  this.config.target.appendChild(this.modalEl)

  let component = { ...config.Component }

  if (this.config.data) {
    component.data = Object.assign(component.data(), this.config.data)
  }

  this.vm = new Vue(component)

  let modalStatus = new Promise((resolve, reject) => {
    this.vm.$on('close', () => {
      this.close()
      reject()
    })
    this.vm.$on('error', (error) => {
      this.close()
      reject(error)
    })
    this.vm.$on('success', (data) => {
      this.close()
      resolve(data)
    })
  })

  this.vm.$mount(this.modalEl)
  this.checkStatus = () => modalStatus

  /**
   * open the modal
   */
  this.open = () => { this.vm.show = true }

  /**
   * close the modal
   */
  this.close = () => {
    this.vm.show = false
    if (this.config.autoDestroy) {
      setTimeout(this.destroy, 500)
    }
  }

  /**
   * destory the modal
   */
  this.destroy = () => {
    if (this.vm.show) {
      this.vm.show = false
      setTimeout(this.destroy, 500)
    } else {
      this.vm.$el.parentNode.removeChild(this.vm.$el)
      this.vm.$destroy()
    }
  }
}

export default function install (Vue) {
  Vue.modal = (config) => new Modal(Vue, config)
}
