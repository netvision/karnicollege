<script setup>
useHead({
	title: 'Admissions - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Admission information for Shri Karni Girls College, Nangli Saledi Singh.' }
	]
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
		<!-- Modern Header Section -->
		<section class="bg-white shadow-lg">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div class="text-center">
					<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Admissions <span class="text-indigo-600">2024-25</span>
					</h1>
					<div class="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
				</div>
			</div>
		</section>

		<!-- Admission Information -->
		<section class="py-12 md:py-16">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="bg-white rounded-xl shadow-lg p-8 md:p-12">
					<div class="text-center mb-8">
						<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							Admission <span class="text-indigo-600">Information</span>
						</h2>
						<div class="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
					</div>

					<div class="space-y-6 text-gray-700 leading-relaxed">
						<p class="text-lg">
							Shri Karni Girls College welcomes applications from eligible candidates for undergraduate programs.
						</p>

						<div class="bg-indigo-50 rounded-lg p-6">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
							<ul class="space-y-2">
								<li class="flex items-start space-x-3">
									<span class="text-indigo-600 font-bold">•</span>
									<span>10+2 certificate from recognized board</span>
								</li>
								<li class="flex items-start space-x-3">
									<span class="text-indigo-600 font-bold">•</span>
									<span>Minimum 45% aggregate marks (40% for SC/ST)</span>
								</li>
								<li class="flex items-start space-x-3">
									<span class="text-indigo-600 font-bold">•</span>
									<span>Valid character certificate</span>
								</li>
							</ul>
						</div>

						<div class="bg-green-50 rounded-lg p-6">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Courses Offered</h3>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div class="text-center p-4 bg-white rounded-lg shadow">
									<h4 class="font-semibold text-gray-900">B.A.</h4>
									<p class="text-sm text-gray-600">Bachelor of Arts</p>
								</div>
								<div class="text-center p-4 bg-white rounded-lg shadow">
									<h4 class="font-semibold text-gray-900">B.Sc.</h4>
									<p class="text-sm text-gray-600">Bachelor of Science</p>
								</div>
								<div class="text-center p-4 bg-white rounded-lg shadow">
									<h4 class="font-semibold text-gray-900">B.Com.</h4>
									<p class="text-sm text-gray-600">Bachelor of Commerce</p>
								</div>
							</div>
						</div>

						<div class="bg-blue-50 rounded-lg p-6">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Contact for Admissions</h3>
							<div class="space-y-3">
								<p class="flex items-center space-x-3">
									<span class="text-blue-600">📧</span>
									<span>Email: admissions@karnicollege.edu.in</span>
								</p>
								<p class="flex items-center space-x-3">
									<span class="text-blue-600">📞</span>
									<span>Phone: +91 9610268584</span>
								</p>
								<p class="flex items-center space-x-3">
									<span class="text-blue-600">📍</span>
									<span>Address: Nangli Saledi Singh, Gurgaon, Haryana</span>
								</p>
							</div>
						</div>

						<div class="text-center pt-6">
							<RouterLink
								to="/contact"
								class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
							>
								Contact Us for More Information
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<template>
	<div>
		<!-- Hero Section -->
		<section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h1 class="text-4xl md:text-6xl font-bold mb-6">
						Admissions <span class="text-yellow-400">2024-25</span>
					</h1>
					<p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
						Join our vibrant community of learners and start your journey towards academic excellence and personal growth
					</p>
					<div class="mt-8">
						<RouterLink to="#apply" class="btn-primary text-lg px-8 py-4 mr-4">
							Apply Now
						</RouterLink>
						<RouterLink to="#courses" class="btn-secondary text-lg px-8 py-4">
							View Courses
						</RouterLink>
					</div>
				</div>
			</div>
		</section>

		<!-- Admission Process -->
		<section class="section">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Admission <span class="text-blue-600">Process</span>
					</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Follow these simple steps to secure your place at Shri Karni Girls College
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
					<div
						v-for="step in admissionProcess"
						:key="step.step"
						class="text-center relative"
					>
						<!-- Step Number -->
						<div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
							{{ step.step }}
						</div>

						<!-- Icon -->
						<div class="text-4xl mb-4">{{ step.icon }}</div>

						<!-- Content -->
						<h3 class="text-xl font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
						<p class="text-gray-600 mb-3">{{ step.description }}</p>
						<div class="text-sm text-blue-600 font-medium">{{ step.duration }}</div>

						<!-- Connector Line -->
						<div
							v-if="step.step < admissionProcess.length"
							class="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-x-1/2"
							style="width: calc(100vw / 5 - 4rem);"
						></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Requirements -->
		<section class="section section-primary">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Admission <span class="text-green-600">Requirements</span>
					</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Ensure you meet our eligibility criteria and prepare all necessary documents
					</p>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div
						v-for="req in requirements"
						:key="req.category"
						class="card p-8"
					>
						<div class="text-center mb-6">
							<div class="text-4xl mb-4">{{ req.icon }}</div>
							<h3 class="text-2xl font-semibold text-gray-900">{{ req.category }}</h3>
						</div>

						<ul class="space-y-3">
							<li
								v-for="item in req.items"
								:key="item"
								class="flex items-start space-x-3"
							>
								<svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
								</svg>
								<span class="text-gray-700">{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Courses Offered -->
		<section id="courses" class="section">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Courses <span class="text-purple-600">Offered</span>
					</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Choose from our diverse range of undergraduate programs
					</p>
				</div>

				<div class="overflow-x-auto">
					<table class="w-full bg-white rounded-lg shadow-lg overflow-hidden">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Course</th>
								<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
								<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Seats</th>
								<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fee (Annual)</th>
								<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Eligibility</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<tr
								v-for="course in courses"
								:key="course.name"
								class="hover:bg-gray-50"
							>
								<td class="px-6 py-4 text-sm font-medium text-gray-900">{{ course.name }}</td>
								<td class="px-6 py-4 text-sm text-gray-600">{{ course.duration }}</td>
								<td class="px-6 py-4 text-sm text-gray-600">{{ course.seats }}</td>
								<td class="px-6 py-4 text-sm text-gray-600">{{ course.fee }}</td>
								<td class="px-6 py-4 text-sm text-gray-600">{{ course.eligibility }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>

		<!-- Important Dates -->
		<section class="section section-primary">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Important <span class="text-blue-600">Dates</span>
					</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						Mark these dates in your calendar to ensure you don't miss any important deadlines
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div
						v-for="event in importantDates"
						:key="event.event"
						class="card p-6 flex items-center space-x-4"
					>
						<div class="flex-shrink-0">
							<div
								:class="[
									'w-4 h-4 rounded-full',
									event.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
								]"
							></div>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-gray-900">{{ event.event }}</h3>
							<p class="text-gray-600">{{ event.date }}</p>
						</div>
						<div class="flex-shrink-0">
							<span
								:class="[
									'px-3 py-1 rounded-full text-sm font-medium',
									event.status === 'completed'
										? 'bg-green-100 text-green-800'
										: 'bg-blue-100 text-blue-800'
								]"
							>
								{{ event.status === 'completed' ? 'Completed' : 'Upcoming' }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Scholarships -->
		<section class="section">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Scholarship <span class="text-yellow-600">Opportunities</span>
					</h2>
					<p class="text-xl text-gray-600 max-w-3xl mx-auto">
						We offer various scholarships to support deserving students in their educational journey
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div
						v-for="scholarship in scholarships"
						:key="scholarship.name"
						class="card p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
					>
						<div class="text-4xl mb-4">{{ scholarship.icon }}</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-3">{{ scholarship.name }}</h3>
						<p class="text-gray-600 mb-3">{{ scholarship.eligibility }}</p>
						<div class="text-lg font-bold text-green-600">{{ scholarship.amount }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Application Form Section -->
		<section id="apply" class="section bg-gray-900 text-white">
			<div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Ready to <span class="text-blue-400">Apply</span>?
				</h2>
				<p class="text-xl text-gray-300 mb-8">
					Start your application process today and join our community of successful graduates.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					<div class="card p-6 bg-white text-gray-900">
						<div class="text-3xl mb-4">📱</div>
						<h3 class="text-xl font-semibold mb-2">Online Application</h3>
						<p class="text-gray-600 mb-4">Apply online through our portal</p>
						<button class="btn-primary w-full">Apply Online</button>
					</div>

					<div class="card p-6 bg-white text-gray-900">
						<div class="text-3xl mb-4">📄</div>
						<h3 class="text-xl font-semibold mb-2">Download Form</h3>
						<p class="text-gray-600 mb-4">Download and submit physical form</p>
						<button class="btn-secondary w-full">Download PDF</button>
					</div>

					<div class="card p-6 bg-white text-gray-900">
						<div class="text-3xl mb-4">📞</div>
						<h3 class="text-xl font-semibold mb-2">Need Help?</h3>
						<p class="text-gray-600 mb-4">Contact our admissions team</p>
						<RouterLink to="/contact" class="btn-primary w-full">Contact Us</RouterLink>
					</div>
				</div>

				<div class="text-center">
					<p class="text-gray-400 mb-4">For any queries regarding admissions:</p>
					<p class="text-lg">Email: <a href="mailto:admissions@karnicollege.edu.in" class="text-blue-400 hover:text-blue-300">admissions@karnicollege.edu.in</a></p>
					<p class="text-lg">Phone: <a href="tel:+919610268584" class="text-blue-400 hover:text-blue-300">+91 9610268584</a></p>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.card {
	transition: all 0.3s ease;
}

.card:hover {
	transform: translateY(-2px);
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>