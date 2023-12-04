<script lang="ts" setup>
import { INotes } from '../types';
import Card from './Card.vue';

defineProps<{data: INotes[]; onDelete: ({noteId} : {noteId: string}) => void; onUpdate: ({ noteId }: { noteId: string }) => void}>()
</script>

<template>
  <div class="pt-24 w-full grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 place-items-center pb-10">
    <Card v-for="notes in data" :data="notes" :on-delete="() => onDelete({noteId: notes.id})" :on-update="() => onUpdate({noteId: notes.id})"/>
  </div>
</template>