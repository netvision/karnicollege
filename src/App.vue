<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
	<div id="app">
		<header>
			<AppHeader />
		</header>

		<main class="bg-white text-gray-800 min-h-screen">
			<router-view />
		</main>

		<footer>
			<Footer />
		</footer>
	</div>
</template>
