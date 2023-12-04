<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);

</script>

<template >
  <div class="flex flex-col items-center gap-1">
    <h1 class="text-xl font-semibold">{{ count }}</h1>
    <button class="w-16 py-2 bg-blue-400 rounded-lg" @click="count++">-</button>
    <button class="w-16 py-2 bg-blue-400 rounded-lg" @click="count--">+</button>
  </div>
</template>