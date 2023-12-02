<template>
  <div class="flex flex-col gap-3 items-center">
    <h1 class="text-5xl font-bold -mt-5 mb-3 text-blue-500">Vue Map Card</h1>
    <p class="mt-0 mb-3 text-lg">An opinionated map component for Vue.</p>

    <div class="flex gap-2">
      <button @click="showForm = !showForm"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Try out
      </button>
      <a class="bg-gray-300 hover:bg-gray-200 font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-300 rounded"
        href="https://github.com/this-oliver/vue-map-card" target="_blank">
        GitHub
      </a>
    </div>

    <span v-if="showForm">
      <div class="grid grid-cols-2 gap-4">
        <input v-model="form.street" type="text" placeholder="Street" class="border border-gray-300 rounded-md p-2" />
        <input v-model="form.postal" type="text" placeholder="Post" class="border border-gray-300 rounded-md p-2" />
        <input v-model="form.city" type="text" placeholder="City" class="border border-gray-300 rounded-md p-2" />
        <input v-model="form.country" type="text" placeholder="Country" class="border border-gray-300 rounded-md p-2" />
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        @click="$emit('search', form)">Submit</button>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['search'])

const showForm = ref<boolean>(false)

export interface Address {
  street: string;
  postal: string;
  city: string;
  country: string;
}

const form = reactive<Address>({
  street: '',
  postal: '',
  city: '',
  country: ''
})
</script>
