<template>
	<div class="notes">

		<AddEditNote
			v-model="newNote"	
			ref = "addEditNoteRef"
			placeholder = "Add new note"
			label = "Add new note"
		>
			<template #buttons>
				<button
					class="button is-link has-background-success"
					@click="addNote"
					:disabled="!newNote">
				Add New Note
				</button>
			</template>
		</AddEditNote>

		<progress
			v-if="!storeNotes.notesLoaded"
			class="progress is-large is-success"
			max="100" />

		<template
			v-else
		>
			<Note 
				v-for="note in storeNotes.notes"
				:key="note.id"
				:note="note"
			/>

		<div
				v-if="!storeNotes.notes.length"
				class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
				No notes here yet
			</div>
		</template>
	</div>
</template>

<script setup>
/**
	* Imports
	*/
	import { ref } from 'vue';
	import Note from '@/components/notes/Note.vue';
	import AddEditNote from '@/components/notes/AddEditNote.vue';
	import { useStoreNotes } from '@/stores/storeNotes';
	import { useWatchCharacters } from '@/use/useWatchCharacters';

/**
	* Store
	*/
	const storeNotes = useStoreNotes();

/**
 * Notes
 */
	const newNote = ref('');
	const addEditNoteRef = ref(null);

	const addNote = async () =>{
		await storeNotes.addNote(newNote.value);
		newNote.value = '';
		addEditNoteRef.value.focusTextarea();
	};

	/**
	 * Watch characters
	 */
	 useWatchCharacters(newNote);
</script>