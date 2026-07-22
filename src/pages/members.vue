<script setup>
import VuePdfEmbed from 'vue-pdf-embed'

const pdfSource = 'members.pdf'
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-2xl p-2 px-8 border-b-2">Management Committee Members</h2>
        <VuePdfEmbed annotation-layer text-layer :source="pdfSource" />
    </div>
</template>
