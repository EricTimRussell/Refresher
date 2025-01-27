import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return{
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repudiandae laborum laboriosam tenetu'
        },
        {
          id: 'id2',
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repudiandae'
        },
      ]
    }
  },
  actions: {
    addNote(newNote){
      let currentDate = new Date().getTime(),
          id = currentDate.toString()
      
          let note = {
            id,
            content: newNote
          }

          this.notes.unshift(note)
    },

    deleteNote(noteId){
      this.notes = this.notes.filter(note => { return note.id != noteId })
    }
  }
})