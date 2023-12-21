<template>
	<div class="home">
		<h2 ref="appTitleRef">{{ appTitle }}</h2>
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
			<input v-model="counterData.title" type="text" v-autofocus>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, watch, onMounted, ref, nextTick } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

/**
 * App title
 */

	const appTitle = ref();

	const appTitleRef = ref(null);

	onMounted(() => {
		// console.log('On mountedHook');
		appTitle.value = 'My Amazing Counter App(edit)';
		console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
	});

/**
 * Counter 
 */

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

	const increaseCounter = async (amount, event) =>{
		// console.log(event);
		counterData.count += amount;
		await nextTick();
		console.log("Do something when counter has updated in the log");
		
	}

	const decreaseCounter = amount =>{
		counterData.count -= amount;
	}

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