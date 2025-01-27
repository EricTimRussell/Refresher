<template>
  <div class="card has-background-success p-4">
    <div class="field">
      <div class="control">
        <textarea v-model="newNote" @input="$emit('update:newNote', newNote)" ref="textareaRef" class="textarea"
          placeholder="Add a new note">
        </textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import { ref } from "vue"

// props
const props = defineProps({
  newNote: {
    type: String,
    required: true
  },
})
let newNote = props.newNote

// ref 
const textareaRef = ref(null)

// emits
const emit = defineEmits(['update:newNote'])

// functions
function focusTextarea() {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea
})
</script>