import { defineStore } from 'pinia';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({ 
		notes: []
	}),

	actions: {
		async getNotes(){
			const q = query(collection(db, "notes"));

			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				let note = {
					id: doc.id,
					content: doc.data().content
				}
				
				this.notes.push(note);
			});
		},

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
		},

		getTotalNotes: (state) => {
			return state.notes.length;
		},

		totalCharactersCount: (state) => {
			let count = 0;
			state.notes.forEach(note => {
				count += note.content.length;
			});
			return count;
		}
	}
})