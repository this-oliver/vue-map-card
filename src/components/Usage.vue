<template>
  <div class="usage">
    <h1 class="text-lg font-semibold my-2">Usage</h1>
    <p class="text-base my-3">Setup map with address fields</p>
    <div class="code-block relative group">
      <Highlight className="rounded-md text-xs" language="xml" :autodetect="false" :code="code" />
      <button aria-label="Copy code" title="Copy code"
        class="absolute right-2 top-2 btn-border p-1 hidden group-hover:block" @click="handleCopyCode(code)">
        <CheckIcon v-if="showCheckIcon" />
        <CopyIcon v-else />
      </button>
    </div>

    <p class="text-base my-3">Setup map with coordinates</p>
    <div class="code-block relative group">
      <Highlight className="rounded-md text-xs" language="xml" :autodetect="false" :code="codeWithCoord" />
      <button aria-label="Copy code" title="Copy code"
        class="absolute right-2 top-2 btn-border p-1 hidden group-hover:block" @click="handleCopyCode(codeWithCoord)">
        <CheckIcon v-if="showCheckIcon" />
        <CopyIcon v-else />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import CheckIcon from '~/components/icons/CheckIcon.vue'
import CopyIcon from '~/components/icons/CopyIcon.vue'
import { useCopyCode } from '~/composables/useCopyCode'

const code = `<!-- App.vue -->
<template>
  <MapCard 
    street="Andra Långgatan 5" 
    post="413 03"
    city="Gothenburg"
    country="Sweden" />
</template>

<script lang="ts" setup>
import { MapCard } from 'vue-map-card'
<\/script>
`

const codeWithCoord = `<!-- App.vue -->
<template>
  <MapCard 
    :lng="57.69947"
    :lat="11.95112" />
</template>

<script lang="ts" setup>
import { MapCard } from 'vue-map-card'
<\/script>
`

const showCheckIcon = ref(false)

const handleCopyCode = async (code: string) => {
  await useCopyCode({ code, checkIconRef: showCheckIcon })
}
</script>
