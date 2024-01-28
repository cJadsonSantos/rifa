<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { PlusCircleIcon } from '@heroicons/vue/24/outline'
import { MinusCircleIcon } from '@heroicons/vue/24/outline'

const store = useCounterStore()
</script>

<template>
  <div class="flex justify-center content-center items-center py-2 space-x-2">
    <MinusCircleIcon @click="store.decrement" class="h-6 w-6 text-gray-400 cursor-pointer" />
    <input v-model="store.count" type="number" class="border px-2 py-1 text-center rounded-md" />
    <PlusCircleIcon @click="store.increment" class="h-6 w-6 text-gray-400 cursor-pointer" />
  </div>
</template>

<style scoped>

</style>