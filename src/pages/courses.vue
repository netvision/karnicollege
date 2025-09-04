<script setup>
import { useHead } from '@unhead/vue'

useHead({
	title: 'Courses - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Academic programs and courses offered at Shri Karni Girls College, Nangli Saledi Singh.' }
	]
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
		<!-- Modern Header Section -->
		<section class="bg-white shadow-lg">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div class="text-center">
					<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Academic <span class="text-blue-600">Programs</span>
					</h1>
					<div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>
			</div>
		</section>

		<!-- Coming Soon Section -->
		<section class="py-20 md:py-32">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div class="bg-white rounded-2xl shadow-xl p-12 md:p-16">
					<div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
						<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
						</svg>
					</div>

					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Course Information <span class="text-blue-600">Coming Soon</span>
					</h2>

					<p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
						We are currently updating our course offerings and detailed program information.
						Please check back soon for comprehensive details about our academic programs.
					</p>

					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<RouterLink to="/contact" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
							Contact for Information
						</RouterLink>
						<RouterLink to="/admissions" class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
							Admission Inquiry
						</RouterLink>
					</div>

					<div class="mt-12 pt-8 border-t border-gray-200">
						<p class="text-sm text-gray-500">
							For immediate assistance, please contact our admissions office
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>