<script setup>
const staff = ref([
])
const nonStaff = ref([
])
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-2xl p-2 px-8 border-b-2">Principal and Teaching Staff</h2>
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Designation</th>
              <th scope="col" class="px-6 py-4">Subject</th>
              <th scope="col" class="px-6 py-4">DoJ</th>
              <th scope="col" class="px-6 py-4">Aadhar</th>
              <th scope="col" class="px-6 py-4">PAN</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in staff" :key="i" 
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4">{{ s["S. No."] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Name"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Designation"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Subject"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["DOJ"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Aadhar No."] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["PAN No."] }}</td>
            </tr>
            
          </tbody>
        </table>
        <h2 class="text-2xl p-2 px-8 border-b-2">Non-Teaching Staff</h2>
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Designation</th>
              <th scope="col" class="px-6 py-4">DoJ</th>
              <th scope="col" class="px-6 py-4">Aadhar</th>
              <th scope="col" class="px-6 py-4">PAN</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in nonStaff" :key="i" 
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4">{{ s["S. No."] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Name"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Designation"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["DOJ"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["Aadhar No."] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["PAN No."] }}</td>
            </tr>
            
          </tbody>
        </table>
    </div>
    <Footer />
</template>