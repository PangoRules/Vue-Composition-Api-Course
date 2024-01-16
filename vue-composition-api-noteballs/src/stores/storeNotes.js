import { defineStore } from 'pinia';
import { collection, query, onSnapshot, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({ 
		notes: []
	}),

	actions: {
		async getNotes(){
			const q = query(collection(db, "notes"));

			onSnapshot(q, (querySnapshot) => {
				let tempNotes = [];
				querySnapshot.forEach((doc) => {
						tempNotes.push({
							id: doc.id,
							content: doc.data().content
						});
				});
				this.notes = tempNotes;
			});
		},

		async addNote(newNoteContent){
			let currentDate = new Date().getTime(),
				id = currentDate.toString();
		
			let note = {
				content: newNoteContent
			};

			await setDoc(doc(db, "notes", id), note);
		},

		async deleteNote(noteId){
			await deleteDoc(doc(db, "notes", noteId));
		},

		async updateNote(editedNote){
			const noteRef = doc(db, "notes", editedNote.id);

			// Set the "capital" field of the city 'DC'
			await updateDoc(noteRef, {
				content: editedNote.content
			});
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