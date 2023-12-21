<template>
	<Teleport to=".modal-container">
			<div class="modal-dark" v-if="modelValue">
				<h1><slot name="title"></slot></h1>
				<h2>{{ titleProp }}</h2>
				<slot></slot>
				<button @click="$emit('update:modelValue', false)">Hide modal</button>
			</div>
	</Teleport>
</template>

<script setup>

/**
 * Props
 */
const props = defineProps({
	modelValue:{
		type: Boolean,
		default: false
	},
	titleProp:{
		type: String,
		default: 'No title specified'
	}
});

/**
 * Emits
 */
const emit = defineEmits(['update:modelValue']);

</script>

<style scoped>
.modal-dark{
	background: gray;
	padding: 10px;
	color: white;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>