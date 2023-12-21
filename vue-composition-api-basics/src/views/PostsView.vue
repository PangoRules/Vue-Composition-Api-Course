<template>
	<div class="posts">
		<h1>Posts</h1>

		<ul>
			<li v-for="post in posts" :key="post.id">
				<RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
			</li>
		</ul>

		<textarea v-autofocus></textarea>
	</div>
</template>

<script setup>
/**
 * Imports
 */
 import { vAutofocus } from '@/directives/vAutofocus'
 import { ref } from 'vue'

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
</script>

<style scoped>
ul{
	margin-bottom: 10px;
}
</style>
