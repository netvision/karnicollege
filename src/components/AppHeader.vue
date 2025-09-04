<script setup>
import logo from '@/assets/logo.png'
const menuItems = [
						{ label: 'Home', url: '/' },
						{
							label: 'About Us',
							subMenu: [
								{ label: 'Secretary\'s Message', url: '/intro' },
								{ label: 'Principal\'s Message', url: '/info' },
								{ label: 'Managing Committee', url: '/management' },
								{ label: 'Land Conversion', url: '/land' },
								{ label: 'Society Registeration Certificate', url: '/society' },
							],
							showArrow: true
						},
						{ label: 'Principal & Staff', url: '/staff' },
						{ label: 'Facilities', url: '/facilities' },
						{ label: 'Photo Gallery', url: '/gallery' },
						{ label: 'Documents', url: '/documents' },
						{ label: 'Contact', url: '/contact' },
      ]

	  const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
	<header class="relative z-50">
		<!-- Top Bar -->
		<div class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center text-sm">
					<div class="flex items-center space-x-6">
						<div class="flex items-center space-x-2">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
							</svg>
							<span>Nangli Saledi Singh, Rajasthan</span>
						</div>
						<div class="flex items-center space-x-2">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
							</svg>
							<span>+91 9610268584</span>
						</div>
					</div>
					<div class="flex items-center space-x-4">
						<a href="#" class="hover:text-blue-300 transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
							</svg>
						</a>
						<a href="#" class="hover:text-blue-300 transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
							</svg>
						</a>
						<a href="#" class="hover:text-blue-300 transition-colors duration-200">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Main Header -->
		<div class="bg-white shadow-lg border-b border-neutral-200">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-20">
					<!-- Logo Section -->
					<div class="flex items-center space-x-4">
						<div class="flex items-center space-x-3">
							<img :src="logo" class="h-16 w-auto" alt="College Logo" />
							<div class="hidden md:block">
								<h1 class="text-2xl font-bold text-blue-800 leading-tight">श्री करणी कन्या महाविद्यालय</h1>
								<p class="text-sm text-gray-600">Nangli Saledi Singh, Rajasthan</p>
							</div>
						</div>
					</div>

					<!-- Desktop Navigation -->
					<nav class="hidden lg:flex items-center space-x-8">
						<div
							v-for="(item, index) in menuItems"
							:key="index"
							class="relative"
							:class="{ 'group': item.subMenu }"
						>
							<RouterLink
								v-if="!item.subMenu"
								:to="item.url || '#'"
								class="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
							>
								{{ item.label }}
							</RouterLink>
							<button
								v-else
								class="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
							>
								{{ item.label }}
								<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
								</svg>
							</button>

							<!-- Dropdown Menu -->
							<div
								v-if="item.subMenu"
								class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200"
							>
								<div class="py-1">
									<RouterLink
										v-for="(subItem, subIndex) in item.subMenu"
										:key="subIndex"
										:to="subItem.url"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
									>
										{{ subItem.label }}
									</RouterLink>
								</div>
							</div>
						</div>
					</nav>

					<!-- Mobile menu button -->
					<div class="lg:hidden">
						<button
							@click="toggleMobileMenu"
							class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<svg
								v-if="!mobileMenuOpen"
								class="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
							</svg>
							<svg
								v-else
								class="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Mobile Navigation Menu -->
			<div
				:class="mobileMenuOpen ? 'block' : 'hidden'"
				class="lg:hidden bg-white border-t border-gray-200 shadow-lg"
			>
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-96 overflow-y-auto">
					<template v-for="(item, index) in menuItems" :key="index">
						<RouterLink
							v-if="!item.subMenu"
							:to="item.url || '#'"
							class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
							@click="mobileMenuOpen = false"
						>
							{{ item.label }}
						</RouterLink>
						<div v-else class="space-y-1">
							<div class="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-100">
								{{ item.label }}
							</div>
							<RouterLink
								v-for="(subItem, subIndex) in item.subMenu"
								:key="subIndex"
								:to="subItem.url"
								class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
								@click="mobileMenuOpen = false"
							>
								{{ subItem.label }}
							</RouterLink>
						</div>
					</template>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
/* Additional custom styles for the header */
.nav-link.active {
  color: #2563eb;
}

.nav-link.active::after {
  width: 100%;
}

/* Smooth transitions for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Dropdown styles */
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
}

.group:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
