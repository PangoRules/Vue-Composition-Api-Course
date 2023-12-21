<template>
	<div class="posts">
		<h1>Posts</h1>

		<ul>
			<li v-for="post in posts" :key="post.id">
				<RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
			</li>
		</ul>

		<textarea v-autofocus></textarea>
		<div>
			<button @click="counter.increaseCounter(1)" class="counter-button" :class="{ 'yellow' : counter.oddOrEven === 'odd' }">{{ counter.count }}</button>
		</div>
	</div>
</template>

<script setup>
/**
 * Imports
 */
 import { vAutofocus } from '@/directives/vAutofocus'
 import { ref } from 'vue'
 import { useCounterStore } from '@/stores/counter';

/**
 * Posts
 */
	const posts = ref([
		{
			id: 1,
			title: 'Post 1'
		},
		{
			id: 2,
			title: 'Post 2'
		},
		{
			id: 3,
			title: 'Post 3'
		}
	]);

	/**
	 * CounterButton
	 */
	const counter = useCounterStore();
</script>

<style scoped>
ul{
	margin-bottom: 10px;
}

.counter-button{
	font-size: 60px;
	color: black;
	background-color: pink;
	width: 100%;
}
.counter-button.yellow{
	background-color: yellow;
}
</style>
