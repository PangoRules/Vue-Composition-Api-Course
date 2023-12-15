<template>
	<div class="home">
		<h2>{{ appTitle }}</h2>
		<h3>{{ counterData.title }}</h3>
		<div>
			<button @click="decreaseCounter(2)" class="btn">--</button>
			<button @click="decreaseCounter(2)" class="btn">-</button>
			<span class="counter">{{ counterData.count }}</span>
			<button @click="increaseCounter(1, $event)" class="btn">+</button>
			<button @click="increaseCounter(2)" class="btn">++</button>
		</div>

		<p>This counter id {{ oddOrEven }}</p>

		<div class="edit">
			<h4>Edit counter title:</h4>
			<input v-model="counterData.title" type="text">
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, watch, onMounted, onBeforeMount, onUnmounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'

const appTitle = 'My Amazing Counter App';

const counterData = reactive({
	count: 0,
	title: 'My Counter:'
});

watch(() => counterData.count, (newCount, oldCount) =>{
	if(newCount === 20) alert('Way to go made it to 20.');
});

const oddOrEven = computed(() => {
	return counterData.count % 2 === 0 ? 'even' : 'odd';
});

const increaseCounter = (amount, event) =>{
	// console.log(event);
	counterData.count += amount;
}

const decreaseCounter = amount =>{
	counterData.count -= amount;
}
onBeforeMount(() => {
	console.log("onBeforeMount");
});

onMounted(() => {
	console.log("onMounted");
});

onBeforeUnmount(() => {
	console.log("onBeforeUnmount");
});

onUnmounted(() => {
	console.log("onUnmounted");
});

onActivated(() => {
	console.log("onActivated");
});

onDeactivated(() => {
	console.log("onDeactivated");
});

</script>

<style scoped>
.home{
	text-align: center;
	padding: 20px;
}

.btn, .counter{
	font-size: 40px;
	margin: 10px;
}

.edit{
	margin-top: 60px;
}
</style>