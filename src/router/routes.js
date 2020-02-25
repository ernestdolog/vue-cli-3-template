// components which we "export" to different applications
import ExampleComponent from '@/components/common/example-component'

export default [
  /**
   *  Routes to exported components
   */

  { path: '/', name: 'example-component', component: ExampleComponent, props: false, meta: { requiresAuth: false } }

]
