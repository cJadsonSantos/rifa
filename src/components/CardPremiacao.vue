<script setup lang="ts">
import Cotas from '@/components/Cotas.vue'
import { useCurrentDate } from '@/helpers/useCurrentDate'
import { useCotas } from '@/helpers/useCotas'
import CountCotas from '@/components/CountCotas.vue'

const currentDate = useCurrentDate()
const { cotas, toggleSelected } = useCotas()
</script>

<template>
  <div class="flex content-center justify-center">
    <div class="max-w-xl rounded-3xl overflow-hidden shadow-lg bg-gray-50">

      <div class="font-bold text-xl m-2 p-4">Prêmios
        <span class="font-thin text-sm text-gray-500">Escolha sua sorte</span>
      </div>

      <div class="px-6 py-4">
        <img src="https://i.imgur.com/NMxvkki.jpeg" alt="Image" class="w-full">

        <div class="py-2">
          <p>50 Iphones.</p>
          <p class="text-gray-700 text-sm font-thin">50 Iphones.</p>
        </div>

        <div class="mt-2 flex justify-between">
          <span class="bg-green-600 text-white py-1 px-2 rounded-full text-xs">Em Andamento</span>
          <span class="text-gray-600 text-sm font-thin">{{ currentDate }}</span>
        </div>

      </div>

      <div class="grid grid-cols-2 gap-2 mx-14">
        <Cotas v-for="item in cotas" :key="item.value" :message="item.message" :value="item.value"
               :selected="item.selected" @click="toggleSelected(item)" />
      </div>

      <CountCotas />
    </div>
  </div>
</template>

<style scoped>

</style>