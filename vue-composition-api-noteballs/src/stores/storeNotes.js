import { defineStore } from 'pinia';
import { collection, query, onSnapshot, doc, addDoc, deleteDoc, updateDoc, orderBy } from 'firebase/firestore';
import { db } from '@/js/firebase';
import { useStoreAuth } from '@/stores/storeAuth';

let notesCollectionRef;
let notesCollectionQuery;
let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({ 
		notes: [],
		notesLoaded: false
	}),

	actions: {
		init(){
			// Initialize database refs
			const storeAuth = useStoreAuth();
			notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
			notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));
			this.getNotes();
		},

		emptyNotes(){
			this.notes = [];
			if(getNotesSnapshot) getNotesSnapshot(); //If there is already a snapshot present, unsubscribes from any active listener
		},

		async getNotes(){
			this.notesLoaded = false;

			getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
				let tempNotes = [];
				querySnapshot.forEach((doc) => {
						tempNotes.push({
							id: doc.id,
							content: doc.data().content,
							date: doc.data().date
						});
				});
				this.notes = tempNotes;
				this.notesLoaded = true;
			}, error => {
				console.log('error.message', error.message)
			});
		},

		async addNote(newNoteContent){
			let currentDate = new Date().getTime(),
				date = currentDate.toString();
		
			let note = {
				content: newNoteContent,
				date
			};

			await addDoc(notesCollectionRef, note);
		},

		async deleteNote(noteId){
			await deleteDoc(doc(notesCollectionRef, noteId));
		},

		async updateNote(editedNote){
			const noteRef = doc(notesCollectionRef, editedNote.id);

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