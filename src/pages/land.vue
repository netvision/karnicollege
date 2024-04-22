<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf, pages } = usePDF('land.pdf')
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-2xl p-2 px-8 border-b-2">भूमि संपरिवर्तन आदेश</h2>
        <div v-for="i in pages">
          <VuePDF :pdf="pdf" watermark-text="&copy; Karni Girls College" :page="i" />
        </div>
    </div>
    <Footer />
</template>