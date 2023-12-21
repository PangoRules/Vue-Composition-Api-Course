<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = true">Show modal</button>
		<Teleport to=".modal-container">
			<div v-if="showModal" class="modal">
				<h1>This is a modal!</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore sapiente, expedita, dolores quibusdam corporis eveniet, accusamus cumque neque unde quae reprehenderit in facilis eaque optio excepturi omnis. Totam, obcaecati?</p>
				<button @click="showModal = false">Hide modal</button>
			</div>
	</Teleport>
	</div>
</template>

<script setup>
/**
 * Imports
 */
import { ref } from 'vue';

/**
 * Modals
 */
	const showModal = ref(false);
</script>

<style scoped>
.modal{
	background: beige;
	padding: 10px;
	color: black;
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>