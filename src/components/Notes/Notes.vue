<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-gray-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDelete" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
// imports
import { computed } from "vue";

// props
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// emits
const emit = defineEmits(['deleteClicked'])

// Functions
function handleDelete() {
  emit('deleteClicked', props.note.id)
}

// computed properties
const characterLength = computed(() => {
  // Shorten code by assigning length to props.note.content.length
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

</script>

<style scoped>

</style>