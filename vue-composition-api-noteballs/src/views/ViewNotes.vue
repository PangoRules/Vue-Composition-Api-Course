<template>
	<div class="notes">

		<AddEditNote
			v-model="newNote"	
			ref = "addEditNoteRef"
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

		<Note 
			v-for="note in storeNotes.notes"
			:key="note.id"
			:note="note"
		/>
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

/**
 * Store
 */
	const storeNotes = useStoreNotes();

/**
 * Notes
 */
	const newNote = ref('');
	const addEditNoteRef = ref(null);

	const addNote = () =>{
		storeNotes.addNote(newNote.value);
		newNote.value = '';
		addEditNoteRef.value.focusTextarea();
	};
</script>