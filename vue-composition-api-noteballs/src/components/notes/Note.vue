<template>
	<div
		class="card mb-4"
		>
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="has-text-right has-text-grey-light mt-2">
					<small>{{ characterLength }}</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink href="#" class="card-footer-item" :to="`/editNote/${props.note.id}`">Edit</RouterLink>
			<a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(props.note.id)">Delete</a>
		</footer>
	</div>
</template>

<script setup>
/**
 * Imports
 */
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

/**
 * Props
 */
	const props = defineProps({
		note:{
			type: Object,
			required: true
		}
	});

	/**
	 * Store
	 */
 	const storeNotes = useStoreNotes();

	/**
	 * Note content
	 */
	const characterLength = computed(() => {
		let description = props.note.content.length > 1 ? 'Characters' : 'Character';

		return `${props.note.content.length} ${description}`;
	});
</script>