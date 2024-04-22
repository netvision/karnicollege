<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const mapApi = ref(import.meta.env.VITE_MAPKEY)
const center = { lat: 27.999718, lng: 75.654936 }
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <GoogleMap
    :api-key="mapApi"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="16"
    >
        <Marker :options="{ position: center, label: 'K', title: 'Shri Karni Girls College' }" />
    </GoogleMap>
    <h2 class="text-2xl p-2 px-8 border-b-2">Contact Info:</h2>
    <p class="text-lg font-bold px-8">श्री करणी कन्या महाविद्यालय,  </p>
    <p class="text-lg px-8">नंगली सलेदी सिंह, झुंझुनू, राजस्थान।</p>
    </div>
    <Footer />
</template>