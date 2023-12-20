<template>
	<div class="post-detail">
		<h1>This is a post-page</h1>
		<p>Display the content of the post with Id: {{ $route.params.id }}</p>
		<div>
			<button @click="showPostId">Show post Id</button>
		</div>
		<p><RouterLink to="/posts">&lt; Back</RouterLink></p>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const showPostId = () => {
	alert(`The Id of this post is ${route.params.id}`)
}

</script>
