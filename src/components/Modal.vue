<script lang="ts" setup>
defineProps<{show: boolean; onClose: () => void, onAction:() => void ,title: string, notes: string, disableAdd?: boolean; actionName: string}>();
const emit = defineEmits<{
  (e: 'update:title', payload: string): void,
  (e: 'update:notes', payload: string): void,
}>()
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-dark-primary/80 flex justify-center items-center px-4">
    <div class="bg-light-primary p-4 shadow-md rounded-lg w-full max-w-md flex flex-col gap-4">
      <h3 class="text-2xl font-semibold font-be-viet">{{ actionName }}</h3>
      <div class="w-full flex flex-col gap-2">
        <input type="text" :value="title" @input="emit('update:title', ($event.target as HTMLInputElement).value)" name="title" id="title" placeholder="Title note..." class="w-full px-4 py-3 rounded-lg bg-transparent border border-dark-primary outline-none text-dark-primary font-semibold font-be-viet">
        <textarea :value="notes" @input="emit('update:notes', ($event.target as HTMLTextAreaElement).value)" name="notes" id="notes" placeholder="Notes..." cols="30" rows="10" class="resize-none w-full px-4 py-3 rounded-lg bg-transparent border border-dark-primary outline-none text-dark-primary font-semibold font-be-viet" />
      </div>
      <div class="w-full flex justify-end gap-2">
        <button @click="onAction" :disabled="disableAdd" class="px-8 py-2 bg-dark-primary rounded-lg shadow-md font-be-viet font-semibold text-light-primary disabled:cursor-not-allowed disabled:bg-dark-primary/20">{{actionName }}</button>
        <button @click="onClose" class="px-8 py-2 bg-white rounded-lg shadow-md font-be-viet font-semibold text-dark-primary">Close</button>
      </div>
    </div>
  </div>
</template>