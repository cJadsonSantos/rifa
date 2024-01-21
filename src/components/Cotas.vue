<script setup lang="ts">
const props = defineProps(['message', 'value', 'selected']);
</script>

<template>
  <div
    class="bg-gray-300 rounded cursor-pointer opacity-80 text-center p-2"
    :class="{ 'border-green-500': selected }"
  >
    <h1 class="font-normal text-2xl" v-text="'+' + value" />
    <h2 class="font-thin" v-text="message" />
  </div>
</template>

<style scoped>
.border-green-500 {
  border: 2px solid #48bb78;
}
</style>