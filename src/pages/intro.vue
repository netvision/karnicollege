<script setup>
import secretary from '../assets/secretary.jpeg'
import { useHead } from '@unhead/vue'

useHead({
	title: 'Secretary\'s Message - Shri Karni Girls College',
	meta: [
		{ name: 'description', content: 'Message from the Secretary of Shri Karni Girls College, Nangli Saledi Singh.' }
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
						Secretary's <span class="text-blue-600">Message</span>
					</h1>
					<div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div class="bg-white rounded-2xl shadow-xl overflow-hidden">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
						<!-- Secretary Image -->
						<div class="lg:col-span-1">
							<div class="relative h-80 lg:h-full">
								<img
									:src="secretary"
									class="w-full h-full object-cover"
									alt="Secretary Shri Prakash Singh"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
								<div class="absolute bottom-6 left-6 right-6">
									<div class="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
										<h3 class="text-lg font-bold text-gray-900">Shri Prakash Singh</h3>
										<p class="text-sm text-gray-600">Secretary</p>
										<p class="text-sm text-gray-600">Shri Karni Girls College</p>
									</div>
								</div>
							</div>
						</div>

						<!-- Message Content -->
						<div class="lg:col-span-2 p-8 md:p-12">
							<div class="space-y-6">
								<div class="border-l-4 border-blue-600 pl-6">
									<p class="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
										प्रिय युवा मन,
									</p>
								</div>

								<div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
									<p class="mb-6">
										हमें खुशी है कि आप अपनी उच्च शिक्षा के लिए श्री करणी कन्या महाविद्यालय पर विचार कर रहे हैं। इस संस्थान ने सीखने और जीवन-कौशल प्रणाली को परिष्कृत किया है, जिसकी प्रशंसा सम्पूर्ण क्षेत्र में की जाती रही है। आपकी शिक्षा पर यहां किया गया निवेश निश्चित रूप से आपको जीवन भर भरपूर लाभ देगा।
									</p>

									<p class="mb-6">
										आपकी पृष्ठभूमि या क्षमता कुछ भी हो, आपको इस तरह से तैयार और पोषित किया जाता है कि आप आत्मविश्वास से, जिम्मेदारी से और स्वतंत्र रूप से प्रतिस्पर्धी दुनिया में आगे बढ़ सकें। सफल पुर्व छात्राए इस बात का जीवंत प्रमाण हैं कि यह अनूठी शिक्षण प्रणाली काम करती है, और अच्छी तरह से काम करती है।
									</p>

									<p class="mb-8">
										इस कॉलेज ने हर क्षेत्र में लंबी प्रगति की है और शिक्षा के क्षेत्र में अपनी एक खास जगह बनाई है। मैं उन्हें भारत की रोशनी और आशा की किरण मानता हूं। गुणवत्तापूर्ण शिक्षा के लिए एक उत्कृष्ट गंतव्य के रूप में, मैं उन सभी को शुभकामनाएं, शांति और समृद्धि की कामना करता हूं जो शिक्षा और इसके प्रकट गुणों, लक्ष्यों और उद्देश्यों को फैलाने के महान कार्य में योगदान देते हैं।
									</p>
								</div>

								<div class="border-t border-gray-200 pt-6">
									<div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
										<div class="text-right">
											<p class="text-lg font-medium text-gray-800">
												नवीकृत शुभकामनाओं के साथ
											</p>
											<p class="text-lg font-bold text-gray-900 mt-2">
												सचिव
											</p>
											<p class="text-lg font-bold text-blue-600">
												प्रकाश सिंह
											</p>
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
