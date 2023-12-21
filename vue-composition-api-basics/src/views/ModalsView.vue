<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = true">Show modal</button>
	</div>
	<Modal v-if="showModal"></Modal>
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
