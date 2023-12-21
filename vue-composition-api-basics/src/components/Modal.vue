<template>
	<Teleport to=".modal-container">
			<div class="modal">
				<h1><slot name="title"></slot></h1>
				<h2>{{ titleProp }}</h2>
				<slot></slot>
				<button @click="hideModal">Hide modal</button>
			</div>
	</Teleport>
</template>

<script setup>

/**
 * Props
 */
const props = defineProps({
	titleProp:{
		type: String,
		default: 'No title specified'
	}
});

/**
 * Emits
 */
const emit = defineEmits(['hideModal']);

/**
 * Hide modal
 */
const hideModal = () =>{
	emit('hideModal');
}

</script>

<style scoped>
.modal{
	background: beige;
	padding: 10px;
	color: black;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>