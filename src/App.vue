<template>
  <div class="bg-neutral-100/66 dark:bg-neutral-900 px-4">
    <div class="container mx-auto max-w-full sm:max-w-2xl relative">
      <header class="py-20 flex-center flex-col">
        <Hero @search="handleSearch" />
      </header>

      <main class="grid grid-cols-1 gap-8 text-xs 2xl:text-sm text-primary pb-20">
        <MapCard :street="demoAddress.street" :post="demoAddress.postal" :city="demoAddress.city"
          :country="demoAddress.country" />

        <Installation />
        <Usage />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { MapCard } from '../packages'
import { useSEOHeader } from '~/composables/useSEOHeader'
import type { Address } from '~/components/Hero.vue';

useSEOHeader()

const demoAddress = reactive<Address>({
  street: 'Andra Långgatan 5',
  postal: '413 03',
  city: 'Gothenburg',
  country: 'Sweden'
})

function handleSearch(address: Address) {
  demoAddress.street = address.street
  demoAddress.postal = address.postal
  demoAddress.city = address.city
  demoAddress.country = address.country
}
</script>
