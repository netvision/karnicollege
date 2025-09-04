<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
	<header>
		<AppHeader />
	</header>

	<main
		class="
			dark:bg-gray-800 dark:text-white
			bg-white
			text-gray-800
			min-h-screen
		"
	>
		<router-view />
	</main>

	<footer>
		<Footer />
	</footer>
</template>
