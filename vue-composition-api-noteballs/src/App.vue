<template>
	<Navbar></Navbar>
	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<script setup>
/**
 * Imports
 */
	import Navbar from '@/components/layout/Navbar.vue';
	import { useStoreAuth } from '@/stores/storeAuth';
	import { onMounted } from 'vue';

/**
 * Store
 */
	const storeAuth = useStoreAuth();
	

/**
 * Mounted
 */
	onMounted(async () => {
		storeAuth.init();
	})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
