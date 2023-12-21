import { reactive, computed, watch, nextTick } from 'vue'

const counterData = reactive({
	count: 0,
	title: 'My Counter:'
});

export function useCounter(){
	/**
 * Counter 
 */
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

	return { counterData, oddOrEven, increaseCounter, decreaseCounter }
}