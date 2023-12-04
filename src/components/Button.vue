<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>
<template>
    <button class="bg-yellow-300">{{ props.title }}</button>
</template>