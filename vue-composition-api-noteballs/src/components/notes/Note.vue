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
			<a href="#" class="card-footer-item">Edit</a>
			<a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked">Delete</a>
		</footer>
	</div>
</template>

<script setup>
import { computed } from 'vue';

/**
 * Props
 */
	const props = defineProps({
		note:{
			type: Object,
			required: true
		}
	})

	/**
	 * Note content
	 */
	const characterLength = computed(() => {
		let description = props.note.content.length > 1 ? 'Characters' : 'Character';

		return `${props.note.content.length} ${description}`;
	});

	/**
	 * Handle deleted click
	 */
	 const emit = defineEmits(['deleteClicked'])

	 const handleDeleteClicked = () => {
		emit('deleteClicked', props.note.id);
	 }


</script>