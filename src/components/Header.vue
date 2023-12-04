<script lang="ts" setup>
  defineProps<{onAdd: () => void}>()
</script>

<template>
  <div class="flex justify-between py-3 bg-dark-primary fixed top-4 inset-x-4 md:inset-x-20 lg:inset-x-40 px-5 rounded-lg shadow-md">
    <h1 class="font-bold text-4xl font-be-viet text-light-primary drop-shadow-md">Notes</h1>
    <button @click="onAdd" class="w-10 h-10 bg-light-primary rounded-full text-2xl flex justify-center items-center font-extrabold font-be-viet shadow-md">+</button>
  </div>
</template>