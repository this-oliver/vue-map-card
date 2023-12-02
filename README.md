# map-card for Vue

> An opinionated map component for Vue.

## Preview

[vue-map-card.webm](https://github.com/this-oliver/vue-map-card/assets/32515201/7a2f6b25-8fe5-4f9d-8f18-45bfe30bc5ce)

## Introduction

`map-card` is an opinionated map component for Vue that offers a simple way to display a map on a card. The component is built with [Vue 3](https://v3.vuejs.org/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- [x] Display a map on a card
- [x] Set map location by address
- [x] Set map location by coordinates
- [x] Set zoom level
- [ ] Display a map on a card with a marker

## Installation

To start using the library, install it in your project:

```bash
pnpm install vue-map-card
or
yarn add vue-map-card
```

## Usage

### For Vue 3

```html
<!-- App.vue -->
<template>
  <map-card 
    street="Andra Långgatan 5" 
    post="413 03"
    city="Gothenburg"
    country="Sweden" />
</template>

<script lang="ts" setup>
import { MapCard } from 'vue-map-card'
</script>
```

### For Nuxt 3

Define a nuxt plugin

```ts
// plugins/sonner.client.ts
import { VueMapCard } from 'vue-map-card'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('MapCard', MapCard)
})
```

Use `MapCard` component anywhere in the Vue SFC

```html
<!-- App.vue -->
<template>
  <map-card 
    street="Andra Långgatan 5" 
    post="413 03"
    city="Gothenburg"
    country="Sweden" />
</template>

<script lang="ts" setup>
</script>
```

Add the build transpile for `vue-map-card`

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ...
  build: {
    transpile: ['vue-map-card']
  }
})
```

### CDN Link

**EMS version**

```ts
https://cdn.jsdelivr.net/npm/vue-map-card/+esm
```

**UMD version**

> Make sure to use the [latest version number](./package.json) in the link below.

```ts
https://www.unpkg.com/vue-map-card@0.0.1/lib/vue-map-card.umd.cjs
```

## Configuration

### Zoom

> it is possible to exceed the maximum zoom level of `50` but it is not recommended.

It is possible to set the zoom level of the map by passing the `zoom` prop. The default value is `15` but you can set it to any value between `1` and `50`.

```html
<!-- App.vue -->
<template>
  <map-card 
    street="Andra Långgatan 5" 
    post="413 03"
    city="Gothenburg"
    country="Sweden"
    zoom="10"/>
</template>

<script lang="ts" setup>
import { MapCard } from 'vue-map-card'
</script>
```

## License

MIT [@this-oliver](https://github.com/this-oliver)
