<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import dayjs from "dayjs";
import Header from './components/Header.vue';
import Contain from './components/Contain.vue';
import Modal from './components/Modal.vue';
import { INotes } from './types';
const showModal = ref(false);
const showModalUpdate = ref(false);
const getItem = ref<{ noteId: string; idx: number }>({ noteId: "", idx: 0 });
const notes = ref<INotes[]>([])
const data = ref<{title: string; note: string}>({title: "", note: ""});

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * Date.now()).toString(16),
    title: data.value.title,
    note: data.value.note,
    date: `${dayjs(new Date()).format("DD MMMM YYYY")} - ${dayjs(new Date()).format("hh:mm")}`
  })
  const parsed = JSON.stringify(notes.value);
  localStorage.setItem('notesData', parsed);
  data.value = {
    note: "",
    title: "",
  }
  showModal.value = false
};
const disabledAdd = computed(() => data.value.title !== "" && data.value.note !== "");

onMounted(() => {
    if (localStorage.getItem('notesData')) {
    try {
      notes.value = JSON.parse(localStorage.getItem('notesData') as string);
    } catch (e) {
      localStorage.removeItem('notesData');
    }
  }
})

const onDelete = (id: string) => {
  const newData = notes.value.filter((item) => item.id !== id)
  notes.value = newData
  localStorage.setItem("notesData", JSON.stringify(newData))
}

const showUpdate = (noteId: string) => {
  const newData = notes.value.find((note) => note.id === noteId)
  const idx = notes.value.findIndex((note) => note.id === noteId)
  getItem.value = {
    noteId,
    idx
  }
  data.value = {
    title: newData?.title || '',
    note: newData?.note || '',
  };
  showModalUpdate.value = true
}

const onUpdate = () => {
  notes.value[getItem.value.idx] = {
    id: getItem.value.noteId,
    title: data.value.title,
    note: data.value.note,
    date: `${dayjs(new Date()).format("DD MMMM YYYY")} - ${dayjs(new Date()).format("hh:mm")}`
  }
  const parsed = JSON.stringify(notes.value);
  localStorage.setItem('notesData', parsed);
  data.value = {
    note: "",
    title: "",
  }
  showModalUpdate.value = false
}

watch(showModalUpdate, () => {
  if (showModalUpdate.value === false) {
    data.value = {
      note: "",
      title: ""
    }
    getItem.value = {
      idx: 0,
      noteId: ""
    }
  }
})
</script>

<template>
  <div class="w-full min-h-screen px-4 md:px-20 lg:px-40 bg-light-primary">
    <Header :on-add="() => showModal = true" />
    <Contain :data="notes" :on-delete="({noteId}) => onDelete(noteId)" :on-update="({noteId}) => showUpdate(noteId)" />
    <Modal :disable-add="!disabledAdd" v-model:title="data.title" v-model:notes="data.note" :show="showModal" :on-close="() => showModal = false" :on-action="addNote" action-name="Add Notes" />
    <Modal :disable-add="!disabledAdd" v-model:title="data.title" v-model:notes="data.note" :show="showModalUpdate" :on-close="() => showModalUpdate = false" :on-action="onUpdate" action-name="Update Notes" />
  </div>
</template>
