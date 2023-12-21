<template>
	<Teleport to=".modal-container">
			<div class="modal" v-if="modelValue">
				<h1><slot name="title"></slot></h1>
				<h2>{{ titleProp }}</h2>
				<slot></slot>
				<button @click="$emit('update:modelValue', false)">Hide modal</button>
				<div>
					Username is: {{ userData.username }}
				</div>
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
	},
	userData:{
		type: Object
	}
});

/**
 * Emits
 */
const emit = defineEmits(['update:modelValue']);

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