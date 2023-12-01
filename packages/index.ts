import type { Plugin } from 'vue'
import { MapCard } from './component'
import type { MapCardProps } from './component'

export { MapCard, MapCardProps }

const plugin: Plugin = {
  install(app) {
    app.component('MapCard', MapCard)
  }
}

export default plugin
