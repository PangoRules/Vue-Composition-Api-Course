<template>
	<Teleport to=".modal-container">
			<div class="modal">
				<h1><slot name="title"></slot></h1>
				<slot></slot>
				<button>Hide modal</button>
			</div>
	</Teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

console.log(slots.title());
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