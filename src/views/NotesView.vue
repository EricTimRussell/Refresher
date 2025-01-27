<template>
  <div class="notes">
    <AddEditNote v-model:newNote="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button :disabled="!newNote" @click="addNote"
          class="button has-background-primary-light is-success is-outlined">Add Note</button>
      </template>
    </AddEditNote>

    <Notes v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Notes from "@/components/Notes/Notes.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// store
const storeNotes = useStoreNotes()


// refs
const newNote = ref('')
const addEditNoteRef = ref(null)

// Functions
function addNote() {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

</script>

<style scoped>

</style>