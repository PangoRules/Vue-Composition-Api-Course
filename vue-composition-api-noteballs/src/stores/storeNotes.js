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
		}
	}
})