<template>
	<div class="edit-note">
		<AddEditNote	
			v-model = "noteContent.content"
			ref = "addEditNoteRef"
			bgColor = "link"
			placeholder = "Edit note"
			label = "Edit note"
		>
			<template #buttons>
				<RouterLink
					class="button is-link is-light"
					to="/">
				Cancel
				</RouterLink>
				<button
					class="button is-link has-background-link"
					:disabled="!noteContent.content"
					@click="handleSaveClicked"
					>
				Edit Note
				</button>
			</template>
		</AddEditNote>
	</div>
</template>

<script setup>
	/**
	 * Imports
	 */
	import { useStoreNotes } from '@/stores/storeNotes';
	import { storeToRefs } from 'pinia'
	import AddEditNote from '@/components/notes/AddEditNote.vue';
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	/**
	 * Store
	 */
 	const storeNotes = useStoreNotes();
	const { getNoteContentById } = storeToRefs(storeNotes);

	/**
	 * Router
	 */
	 const router = useRouter();

	/**
	 * Note to edit
	 */
	const noteContent = ref({
		id: router.currentRoute.value.params.id,
		content: ''
	});

	onMounted(() => {
		noteContent.value.content = getNoteContentById.value(router.currentRoute.value.params.id);
	});

	const handleSaveClicked = async () => {
		await storeNotes.updateNote(noteContent.value);
		router.push('/')
	}

</script>