<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const mapApi = ref(import.meta.env.VITE_MAPKEY)
const center = { lat: 27.999718, lng: 75.654936 }
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex">
    <GoogleMap
    :api-key="mapApi"
    style="width: 80%; height: 500px"
    :center="center"
    :zoom="17"
    >
        <Marker :options="{ position: center, label: 'K', title: 'Shri Karni Girls College' }" />
    </GoogleMap>
    <div class="w-1/2"><h2 class="text-2xl p-2 px-8 border-b-2">Contact Info:</h2>
    <p class="text-2xl font-bold px-8">श्री करणी कन्या महाविद्यालय,  </p>
    <p class="text-lg px-8">नंगली सलेदी सिंह, झुंझुनू, राजस्थान।</p>
	<p class="text-lg px-8">Email: college.karni@gmail.com</p>
	<p class="text-lg px-8">Contact No.: 9610268584, 8058274950</p></div>
    </div>
    <Footer />
</template>
