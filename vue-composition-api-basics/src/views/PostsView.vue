<template>
	<div class="posts">
		<h1>Posts</h1>

		<ul>
			<li>
				<RouterLink to="/postDetail/1">Post 1</RouterLink>
			</li>
			<li>
				<RouterLink to="/postDetail/2">Post 2</RouterLink>
			</li>
			<li>
				<RouterLink to="/postDetail/3">Post 3</RouterLink>
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

</script>

<style scoped>
ul{
	margin-bottom: 10px;
}
</style>
