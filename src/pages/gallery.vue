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
</script>
<template>
    <AppHeader />
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph1" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph2" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph3" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph4" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph5" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph6" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph7" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph8" />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                :src="ph10" />
            </div>
        </div>
    </div>
    <Footer />
</template>