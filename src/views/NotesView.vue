<template>
  <div class="notes">

    <div class="card has-background-success p-4">
      <div class="field">
        <div class="control">
          <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Add a new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button :disabled="!newNote" @click="addNote"
            class="button has-background-primary-light is-success is-outlined">Add Note</button>
        </div>
      </div>
    </div>

    <Notes v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Notes from "@/components/Notes/Notes.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// store
const storeNotes = useStoreNotes()


// refs
const newNote = ref('')
const newNoteRef = ref(null)

// Functions
function addNote() {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}

</script>

<style scoped>

</style>