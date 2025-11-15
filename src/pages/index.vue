<script setup>
import slide from '@/assets/slide1.jpg';
import slide2 from '@/assets/slide2.jpg';
import slide3 from '@/assets/slide3.jpg';
import slide5 from '@/assets/slide5.jpg';
import { useHead } from '@unhead/vue';

useHead({
	title: 'Shri Karni Girls College - Excellence in Education',
	meta: [
		{ name: 'description', content: 'Shri Karni Girls College, Nangli Saledi Singh - Committed to providing quality education and empowering young minds.' }
	]
});

onMounted(async () => {
	const { Carousel, initTWE } = await import("tw-elements");
	initTWE({ Carousel });
});
</script>

<template>
	<div>
		<!-- Modern Carousel Section -->
		<section class="relative">
			<div
				id="carouselExampleCaptions"
				class="relative max-w-7xl mx-auto h-[600px] md:h-[700px] overflow-hidden shadow-2xl rounded-b-3xl"
				data-twe-carousel-init
				data-twe-ride="carousel"
			>
				<!-- Carousel indicators -->
				<div
					class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[2] flex list-none justify-center p-0"
					data-twe-carousel-indicators
				>
					<button
						type="button"
						data-twe-target="#carouselExampleCaptions"
						data-twe-slide-to="0"
						data-twe-carousel-active
						class="mx-2 box-content h-3 w-3 rounded-full bg-white bg-opacity-60 border-0 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-twe-target="#carouselExampleCaptions"
						data-twe-slide-to="1"
						class="mx-2 box-content h-3 w-3 rounded-full bg-white bg-opacity-60 border-0 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-twe-target="#carouselExampleCaptions"
						data-twe-slide-to="2"
						class="mx-2 box-content h-3 w-3 rounded-full bg-white bg-opacity-60 border-0 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
						aria-label="Slide 3"
					></button>
					<button
						type="button"
						data-twe-target="#carouselExampleCaptions"
						data-twe-slide-to="3"
						class="mx-2 box-content h-3 w-3 rounded-full bg-white bg-opacity-60 border-0 cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
						aria-label="Slide 5"
					></button>
				</div>

				<!-- Carousel items -->
				<div class="relative w-full h-full overflow-hidden">
					<!-- First item -->
					<div
						class="relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-twe-carousel-active
						data-twe-carousel-item
						style="backface-visibility: hidden"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
						<img :src="slide" class="block w-full h-full object-cover" alt="College Campus" />
						<div class="absolute inset-x-[10%] md:inset-x-[15%] bottom-8 md:bottom-12 z-20">
							<div class="text-center text-white">
								<h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-300 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
									श्री करणी कन्या महाविद्यालय, नंगली सलेदी सिंह
								</h2>
								<p class="text-lg md:text-xl font-semibold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
									Affiliated to the PDU Shekhawati University, Sikar
								</p>
							</div>
						</div>
					</div>

					<!-- Second item -->
					<div
						class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-twe-carousel-item
						style="backface-visibility: hidden"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
						<img :src="slide2" class="block w-full h-full object-cover" alt="Award Function" />
						<div class="absolute inset-x-[10%] md:inset-x-[15%] bottom-8 md:bottom-12 z-20">
							<div class="text-center text-white">
								<h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-300 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
									Award Function
								</h2>
								<p class="text-lg md:text-xl font-semibold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
									Celebrating Excellence and Achievement
								</p>
							</div>
						</div>
					</div>

					<!-- Third item -->
					<div
						class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-twe-carousel-item
						style="backface-visibility: hidden"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
						<img :src="slide3" class="block w-full h-full object-cover" alt="College Activities" />
						<div class="absolute inset-x-[10%] md:inset-x-[15%] bottom-8 md:bottom-12 z-20">
							<div class="text-center text-white">
								<h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-300 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
									College Activities
								</h2>
								<p class="text-lg md:text-xl font-semibold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
									Holistic Development Through Various Programs
								</p>
							</div>
						</div>
					</div>

					<!-- Fourth item -->
					<div
						class="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-twe-carousel-item
						style="backface-visibility: hidden"
					>
						<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
						<img :src="slide5" class="block w-full h-full object-cover" alt="Future Leaders" />
						<div class="absolute inset-x-[10%] md:inset-x-[15%] bottom-8 md:bottom-12 z-20">
							<div class="text-center text-white">
								<h2 class="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-300 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
									Building Future Leaders
								</h2>
								<p class="text-lg md:text-xl font-semibold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
									Empowering Young Women for Tomorrow
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Carousel controls -->
				<button
					class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-all duration-200 hover:text-white hover:opacity-100 hover:bg-black/20 focus:text-white focus:opacity-100 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-twe-target="#carouselExampleCaptions"
					data-twe-slide="prev"
				>
					<span class="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</span>
				</button>
				<button
					class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-all duration-200 hover:text-white hover:opacity-100 hover:bg-black/20 focus:text-white focus:opacity-100 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-twe-target="#carouselExampleCaptions"
					data-twe-slide="next"
				>
					<span class="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</span>
				</button>
			</div>
		</section>
	</div>
</template>

<route lang="yaml">
name: home
</route>
