<script setup>
import ph1 from '@/assets/ph1.jpg'
import ph2 from '@/assets/ph2.jpg'
import ph3 from '@/assets/ph3.jpg'
import ph4 from '@/assets/ph4.jpg'
import ph5 from '@/assets/ph5.jpg'
import ph6 from '@/assets/ph6.jpg'
import ph7 from '@/assets/ph7.jpg'
import ph8 from '@/assets/ph8.jpg'
import ph10 from '@/assets/ph10.jpg'
import ph11 from '@/assets/ph11.jpeg'
import ph12 from '@/assets/ph12.jpeg'
import ph13 from '@/assets/ph13.jpeg'
import ph14 from '@/assets/ph14.jpeg'
import slide1 from '@/assets/slide1.jpg'
import slide2 from '@/assets/slide2.jpg'
import slide3 from '@/assets/slide3.jpg'
import slide5 from '@/assets/slide5.jpg'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Gallery - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Photo gallery showcasing Shri Karni Girls College campus and activities.' }
	]
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
		<!-- Main Content -->
		<section class="py-12 md:py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Photo <span class="text-purple-600">Gallery</span>
					</h1>
					<div class="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
				</div>

				<!-- Gallery Grid -->
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph1"
								alt="College Campus"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph2"
								alt="Academic Building"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph3"
								alt="Student Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph4"
								alt="Library"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph5"
								alt="Science Lab"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph6"
								alt="Cultural Event"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph7"
								alt="Sports Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph8"
								alt="College Event"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph10"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph11"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph12"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph13"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="ph14"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="slide1"
								alt="College Entrance"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="slide2"
								alt="College Event"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="slide3"
								alt="College Activities"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>

					<div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="slide5"
								alt="College Garden"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
