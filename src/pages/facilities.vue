<script setup>
import library from '@/assets/library.jpg'
import botany from '@/assets/botany.jpg'
import chemistry from '@/assets/chemistry.jpg'
import physics from '@/assets/physics.jpg'
import geography from '@/assets/geography.jpg'
import computer from '@/assets/computer.jpg'
import zoology from '@/assets/zoology.jpg'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Facilities - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Explore our facilities at Shri Karni Girls College, Nangli Saledi Singh.' }
	]
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
		<!-- Main Content -->
		<section class="py-12 md:py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Our <span class="text-blue-600">Facilities</span>
					</h1>
					<div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<!-- Facilities Grid -->
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="library"
								alt="Library"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Library</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="computer"
								alt="Computer Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Computer Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="geography"
								alt="Geography Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Geography Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="physics"
								alt="Physics Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Physics Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="chemistry"
								alt="Chemistry Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Chemistry Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="botany"
								alt="Botany Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Botany Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="zoology"
								alt="Zoology Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2 text-center">Zoology Lab</h3>
							<div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>