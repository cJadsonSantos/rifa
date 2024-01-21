<script setup lang="ts">
const currentDate = (): string => {
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  return `${day}/${month}/${year}`
}

</script>

<template>
  <div class="flex content-center justify-center">
    <div class="max-w-xl rounded-3xl overflow-hidden shadow-lg bg-gray-50">

      <div class="font-bold text-xl m-2 p-4">Prêmios
        <span class="font-thin text-sm text-gray-500">Escolha sua sorte</span>
      </div>

      <div class="px-6 py-4">
        <img src="https://i.imgur.com/NMxvkki.jpeg" alt="Image" class="w-full">
        <div class="font-bold mb-2">50 Iphones.</div>
        <p class="text-gray-700 text-sm font-thin">50 Iphones.</p>

        <div class="mt-2">
          <span class="bg-green-600 text-white py-1 px-2 rounded-full text-xs">Em Andamento</span>
        </div>

        <div class="flex justify-end">
          <span class="text-gray-600 text-sm font-thin">{{ currentDate() }}</span>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>