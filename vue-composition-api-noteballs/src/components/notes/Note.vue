<template>
	<div
		class="card mb-4"
		>
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="columns is-mobile has-text-grey-light mt-2">
					<small class="column">{{ dateFormatted }}</small>
					<small class="column has-text-right">{{ characterLength }}</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink href="#" class="card-footer-item" :to="`/editNote/${note.id}`">Edit</RouterLink>
			<a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
		</footer>
		<ModalDeleteNote
			v-if="modals.deleteNote" 
			v-model="modals.deleteNote"
			:noteId="note.id"
			/>
	</div>
</template>

<script setup>
/**
 * Imports
 */
	import { computed, reactive } from 'vue';
	import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue';
	import { useDateFormat } from '@vueuse/core';

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
 * Note content
 */
	const characterLength = computed(() => {
		let description = props.note.content.length > 1 ? 'Characters' : 'Character';

		return `${props.note.content.length} ${description}`;
	});

	const dateFormatted = computed(() => {
		let date = new Date(parseInt(props.note.date));

		let formattedDate = useDateFormat(date, 'MM-DD-YYYY @ HH:mm');

		return formattedDate.value;
	});

/**
 * Modals
 */
	const modals = reactive({
		deleteNote: false
	})
</script>