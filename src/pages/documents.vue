<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Documents</h1>
    <div class="space-y-8">
      <div>
        <h2 class="text-xl font-semibold mb-2">भवन सुरक्षा प्रमाण पत्र</h2>
        <iframe
          src="/bhawan.pdf"
          width="100%"
          height="600px"
          class="border rounded"
        ></iframe>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">अनापत्ति प्रमाण पत्र</h2>
        <iframe
          src="/noc.pdf"
          width="100%"
          height="600px"
          class="border rounded"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static embedding
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>
