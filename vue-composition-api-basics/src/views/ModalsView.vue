<template>
	<div class="modals">
		<h1>Modals</h1>
		<div>
			<label for="">Show Dark Modal</label>
			<input v-model="showDarkModal" type="checkbox">
		</div>
		<button @click="showModal = true">Show modal</button>
	</div>
	<component 
		v-model="showModal"
		:is="showDarkModal ? ModalDark : Modal"
		titleProp="My modal title (via prop)"
		:userData="userData"
		>
		<template #title>
			This is a modal!
		</template>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore sapiente, expedita, dolores quibusdam corporis eveniet, accusamus cumque neque unde quae reprehenderit in facilis eaque optio excepturi omnis. Totam, obcaecati?</p>
	</component>
</template>

<script setup>

/**
 * Imports
 */
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

/**
 * Props
 */
	const props = defineProps({ userData: {type: Object} })

/**
 * Modals
 */
	const showModal = ref(false);
	const showDarkModal = ref(false);
	
</script>
