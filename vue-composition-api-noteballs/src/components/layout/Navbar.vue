<template>
	<nav class="navbar is-success" role="navigation" aria-label="main navigation">

		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<div class="navbar-item is-size-4 is-family-monospace ">
					Noteballs
				</div>
	
				<a
					@click.prevent="showModalNav = !showModalNav"
					role="button"
					class="navbar-burger"
					:class="{'is-active':showModalNav}"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					ref="navbarBurgerRef">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
	
			<div
				id="navbarBasicExample"
				class="navbar-menu"
				:class="{'is-active':showModalNav}"
				ref="navbarMenuRef">
				<div class="navbar-start">
					<button
						class="button is-small is-info mt-3 ml-3"
						@click="storeAuth.logOutUser()">
						Log out
					</button>
				</div>

				<div class="navbar-end">
					<RouterLink
						@click="showModalNav = false" 
						to="/" 
						class="navbar-item"
					>
						Notes
					</RouterLink>
					<RouterLink
						@click="showModalNav = false" 
						to="/stats" 
						class="navbar-item"
					>
						Stats
					</RouterLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
/**
 * Imports
 */
	import { ref } from 'vue';
	import { onClickOutside } from '@vueuse/core'
	import { useStoreAuth } from '@/stores/storeAuth';

/**
 * Store
 */
	const storeAuth = useStoreAuth();

/**
 * Mobile nav
 */
	const showModalNav = ref(false);
	
	/**
	 * Click outside to close
	 */
	const navbarMenuRef = ref(null);
	const navbarBurgerRef = ref(null);

	onClickOutside(navbarMenuRef, () => {
		showModalNav.value = false;
	}, {
		ignore: [navbarBurgerRef]
	});
</script>

<style scoped>
@media (max-width: 1023px){
	.navbar-menu{
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>