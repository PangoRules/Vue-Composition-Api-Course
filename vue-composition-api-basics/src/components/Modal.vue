<template>
	<Teleport to=".modal-container">
			<div class="modal">
				<h1>This is a modal!</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore sapiente, expedita, dolores quibusdam corporis eveniet, accusamus cumque neque unde quae reprehenderit in facilis eaque optio excepturi omnis. Totam, obcaecati?</p>
				<button>Hide modal</button>
			</div>
	</Teleport>
</template>

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