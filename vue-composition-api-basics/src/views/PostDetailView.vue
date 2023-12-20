<template>
	<div class="post-detail">
		<h1>This is a post-page</h1>
		<p>Display the content of the post with Id: {{ $route.params.id }}</p>
		<div>
			<button @click="showPostId">Show post Id</button>
		</div>
		<div>
			<button @click="goHomeIn3Seconds">Go home in 3 seconds</button>
		</div>
		<div>
			<button @click="goToFirstPost">Go to first post</button>
		</div>
		<p><RouterLink to="/posts">&lt; Back</RouterLink></p>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
	alert(`The Id of this post is ${route.params.id}`)
}

const goHomeIn3Seconds = () => {
	setTimeout(() => {
		// router.push('/');
		router.push({
			name: 'home'
		})
	}, 3000)
}

const goToFirstPost = () => {
	router.push({
		name: 'postDetail', 
		params:{
			id: 1
		}
	})
}

</script>
