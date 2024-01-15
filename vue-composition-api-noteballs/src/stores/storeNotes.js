import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({ 
		notes: [
			{
				id: 'id1',
				content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi praesentium saepe corrupti eaque non, hic repellat enim nulla officiis vitae ab expedita, architecto perspiciatis in accusamus sapiente harum laborum earum?'
			},
			{
				id: 'id2',
				content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			}
		]
	}),

	actions: {
		addNote(newNoteContent){
			let currentDate = new Date().getTime(),
				id = currentDate.toString();
		
			let note = {
				id: id,
				content: newNoteContent
			};
			
			this.notes.unshift(note);
		},

		deleteNote(noteId){
			this.notes = this.notes.filter(note => note.id !== noteId);
		},

		updateNote(editedNote){
			const index = this.notes.findIndex(note => note.id === editedNote.id);

			if (index !== -1) {
				// Create a new object with the updated content
				const updatedNote = {
					...this.notes[index],
					content: editedNote.content,
				};

				// Update the array with the new object
				this.notes.splice(index, 1, updatedNote);
			}
		}
	},
	getters:{
		getNoteContentById: (state) => {
			return (noteId) => state.notes.find(note => note.id === noteId).content;
		}
	}
})