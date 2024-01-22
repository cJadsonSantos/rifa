<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div class="flex justify-center content-center items-center space-x-2">
    <button @click="store.decrement" class="bg-red-500 text-white px-2 py-1 rounded">-</button>
    <input v-model="store.count" type="number" class="border px-2 py-1 text-center rounded" />
    <button @click="store.increment" class="bg-green-500 text-white px-2 py-1 rounded">+</button>
  </div>
</template>

<style scoped>

</style>