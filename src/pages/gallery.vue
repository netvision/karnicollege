<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';

// Define an array of image objects
const galleryImages = ref([
    { src: new URL('@/assets/ph1.jpg', import.meta.url).href, alt: 'College Campus' },
    { src: new URL('@/assets/ph2.jpg', import.meta.url).href, alt: 'Academic Building' },
    { src: new URL('@/assets/ph3.jpg', import.meta.url).href, alt: 'Student Activities' },
    // ph4 was removed
    { src: new URL('@/assets/ph5.jpg', import.meta.url).href, alt: 'Science Lab' },
    { src: new URL('@/assets/ph6.jpg', import.meta.url).href, alt: 'Cultural Event' },
    { src: new URL('@/assets/ph7.jpg', import.meta.url).href, alt: 'Sports Activities' },
    // ph8 was removed
    { src: new URL('@/assets/ph10.jpg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/ph11.jpeg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/ph12.jpeg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/ph13.jpeg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/ph14.jpeg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/slide1.jpg', import.meta.url).href, alt: 'College Entrance' },
    { src: new URL('@/assets/slide2.jpg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/slide3.jpg', import.meta.url).href, alt: 'College Activities' },
    { src: new URL('@/assets/new_gallery_1.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_2.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_3.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_4.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_5.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_6.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_7.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_8.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_9.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_10.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_11.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_12.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_13.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_14.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_15.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_16.jpeg', import.meta.url).href, alt: 'College Event' },
    { src: new URL('@/assets/new_gallery_17.jpeg', import.meta.url).href, alt: 'College Event' },
    // slide5 was removed
]);

// Modal state
const isModalOpen = ref(false);
const currentImage = ref('');
const currentImageAlt = ref('');

// Functions to handle modal
const openModal = (imageSrc, imageAlt) => {
    currentImage.value = imageSrc;
    currentImageAlt.value = imageAlt;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    currentImage.value = '';
    currentImageAlt.value = '';
};

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
					<div
						v-for="(image, index) in galleryImages"
						:key="index"
						class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
						@click="openModal(image.src, image.alt)"
					>
						<div class="relative overflow-hidden">
							<img
								class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
								:src="image.src"
								:alt="image.alt"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Image Modal -->
		<div
			v-if="isModalOpen"
			class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
			@click.self="closeModal"
		>
			<div class="relative bg-white rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto">
				<button
					@click="closeModal"
					class="absolute top-3 right-3 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 z-10"
					aria-label="Close"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
				<img :src="currentImage" :alt="currentImageAlt" class="max-w-full h-auto object-contain">
			</div>
		</div>
	</div>
</template>
