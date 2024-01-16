<template>
	<div class="stats">
		<table class = "table is-fullwidth">
			<thead>
				<tr>
					<th>Stat</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>{{ storeNotes.getTotalNotes }}</td>
				</tr>
				<tr>
					<td>Number of Character (of all notes)</td>
					<td>{{ storeNotes.totalCharactersCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
			v-model="loveNoteballs"
			class="input"
			type="text"
			placeholder="Do you love noteballs??"
			v-autofocus
		/>
	</div>
</template>

<script setup>
/**
 * import
 */
	import { useStoreNotes } from '@/stores/storeNotes';
	import { vAutofocus } from '@/directives/vAutofocus';
	import { useWatchCharacters } from '@/use/useWatchCharacters';
	import { ref } from 'vue';

/**
 * Store
 */
 	const storeNotes = useStoreNotes(); 

/**
 * Love noteballs
 */
	const loveNoteballs = ref('');

/**
 * Watch characters
 */
	useWatchCharacters(loveNoteballs, 50);
</script>