<template>
	<div class="user-data">
		{{ userData.name }} @{{ userData.username }} | 
		Network Status: <span :style="{color: online ? 'green' : 'red'}">{{ online ? 'Online' : 'OffLine' }}</span>
	</div>

  <nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/posts">Posts</RouterLink>
		<RouterLink to="/modals">Modals</RouterLink>
	</nav>

  <RouterView />
</template>

<script setup>
/**
 * Imports
 */
	import { reactive, provide } from 'vue';
	import { useOnline } from '@vueuse/core'

/**
 * User data
 */

 const userData = reactive({
	name: 'Rafael',
	username: 'Pango'
 });

 provide('userData', userData);

 /**
	* Online status
	*/
	const online = useOnline();

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data{
	position: absolute;
	top: 0;
	right: 0;
	font-size: 12px;
	background: beige;
	padding: 5px;
	color: black;
}
</style>
