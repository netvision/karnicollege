<script setup>
import logo from '@/assets/gss-logo.png'
const menuItems = [
        { label: 'Home', url: '/' },
        {
          label: 'About Us',
          subMenu: [
            { label: 'Introduction', url: '/intro' },
			{ label: 'Managing Committee', url: '/management' },
			{ label: 'Land Conversion', url: '/land' },
			{ label: 'Society Registeration Certificate', url: '/society' },
			{ label: 'Other Info', url: '/info' }
          ],
          showArrow: true
        },
        { label: 'Principal & Staff', url: '/staff' },
		{ label: 'Facilities', url: '/facilities' },
		{ label: 'Photo Gallery', url: '/gallery' },
		{ label: 'Contact', url: '/contact' },
      ]

	  const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
	<header>
		<div class="bg-gray-400 flex items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl p-3 text-orange-800 pl-8 font-bold">श्री करणी कन्या महाविद्यालय</h2>
		</div>
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex md:hidden">
					<button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
						</svg>
					</button>
					</div>

					<!-- Menu items -->
					<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
					</div>
					</div>
				</div>
			</div>

			<!-- Mobile menu (visible on small screens) -->
			<div :class="mobileMenuOpen ? 'block' : 'hidden'" class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
			</div>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
