<script lang="ts" setup>
import { TCardNotes } from "../types";
defineProps<TCardNotes>()
</script>

<template>
  <div class="w-full p-4 bg-dark-primary rounded-lg shadow-md flex flex-col gap-5 md:max-w-xs lg:max-w-md">
    <h3 class="text-xl font-be-viet font-semibold text-light-primary">{{ data.title }}</h3>
    <p class="text-light-primary font-be-viet">{{ data.note }}</p>
    <p class="text-sm font-medium font-be-viet text-light-primary/60">{{ data.date }}</p>
    <div class="w-full flex justify-end gap-2">
      <button class="px-8 py-2 bg-light-primary rounded-lg shadow-md font-be-viet font-semibold" @click="onUpdate()">Edit</button>
      <button class="px-8 py-2 bg-red-600 text-white rounded-lg shadow-md font-be-viet font-semibold" @click="onDelete()">Delete</button>
    </div>
  </div>    
</template>