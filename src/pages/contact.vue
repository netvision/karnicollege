<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'
const mapApi = ref(import.meta.env.VITE_MAPKEY)
const center = { lat: 28.23719, lng: 75.64652 }
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
        <Marker :options="{ position: center, label: 'GSS', title: 'GSS Girls\' PG College' }" />
    </GoogleMap>
    <h2 class="text-2xl p-2 px-8 border-b-2">Contact Info:</h2>
    <p class="text-lg font-bold px-8">Ginnidevi Satyanarayan Shekhsaria Girls' PG College</p>
    <p class="text-lg px-8">Chirawa - 333026, Jhunjhunu, Rajasthan.</p>
    <p class="text-lg px-8">Phone: 01596-220289</p>
    <p class="text-lg px-8">WhatsApp: 7878306013</p>
    </div>
    <Footer />
</template>