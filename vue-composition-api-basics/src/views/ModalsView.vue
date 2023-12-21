<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = true">Show modal</button>
	</div>
	<Modal 
		v-if="showModal"
		titleProp="My modal title (via prop)"
		@hideModal="showModal = false"
		>
		<template #title>
			This is a modal!
		</template>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore sapiente, expedita, dolores quibusdam corporis eveniet, accusamus cumque neque unde quae reprehenderit in facilis eaque optio excepturi omnis. Totam, obcaecati?</p>
	</Modal>
</template>

<script setup>

/**
 * Imports
 */
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

/**
 * Modals
 */
	const showModal = ref(false);
	
</script>
