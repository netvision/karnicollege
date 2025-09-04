<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Contact Us - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Contact Shri Karni Girls College, Nangli Saledi Singh. Find our location and contact details.' }
	]
});

const mapApi = ref(import.meta.env.VITE_MAPKEY)
const center = { lat: 27.999718, lng: 75.654936 }
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
		<!-- Main Content -->
		<section class="py-12 md:py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Contact <span class="text-blue-600">Us</span>
					</h1>
					<div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div class="bg-white rounded-2xl shadow-xl overflow-hidden">
					<div class="flex flex-col lg:flex-row">
						<!-- Map Section -->
						<div class="lg:w-4/6">
							<div class="h-80 lg:h-[500px]">
								<GoogleMap
									:api-key="mapApi"
									style="width: 100%; height: 100%"
									:center="center"
									:zoom="17"
								>
									<Marker :options="{ position: center, label: 'K', title: 'Shri Karni Girls College' }" />
								</GoogleMap>
							</div>
						</div>

						<!-- Contact Information -->
						<div class="lg:w-2/6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 lg:p-12">
							<div class="space-y-8">
								<div>
									<h2 class="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-white/30 pb-2">
										Contact Info:
									</h2>
								</div>

								<div class="space-y-6">
									<div>
										<h3 class="text-xl md:text-2xl font-bold mb-3">
											श्री करणी कन्या महाविद्यालय
										</h3>
										<p class="text-lg opacity-90 leading-relaxed">
											नंगली सलेदी सिंह, झुंझुनू, राजस्थान।
										</p>
									</div>

									<div class="space-y-4">
										<div class="flex items-center space-x-4">
											<div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
												<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
												</svg>
											</div>
											<div>
												<p class="font-semibold">Email:</p>
												<p class="opacity-90">college.karni@gmail.com</p>
											</div>
										</div>

										<div class="flex items-center space-x-4">
											<div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
												<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
												</svg>
											</div>
											<div>
												<p class="font-semibold">Contact No.:</p>
												<p class="opacity-90">9610268584, 8058274950</p>
											</div>
										</div>
									</div>
								</div>

								<div class="pt-6 border-t border-white/30">
									<div class="flex items-center space-x-4">
										<div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
											<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
											</svg>
										</div>
										<div>
											<p class="font-semibold text-lg">Find us on the map</p>
											<p class="opacity-90 text-sm">Click the marker for directions</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
