<script setup>
import library from '@/assets/library.jpg'
import botany from '@/assets/botany.jpg'
import chemistry from '@/assets/chemistry.jpg'
import physics from '@/assets/physics.jpg'
import geography from '@/assets/geography.jpg'
import computer from '@/assets/computer.jpg'
import zoology from '@/assets/zoology.jpg'
</script>
<template>
    <AppHeader />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="library"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Library</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="computer"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Computer Lab</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="geography"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Geography Lab</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="physics"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Physics Lab</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="chemistry"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Chemistry Lab</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="botany"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Botany Lab</h5>
            </div>
        </div>

        <div
            class="p-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
                <img
                class="rounded-t-lg"
                :src="zoology"
                alt="" />
            </a>
            <div class="p-3 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Zoology Lab</h5>
            </div>
        </div>
    </div>
    <Footer />
</template>