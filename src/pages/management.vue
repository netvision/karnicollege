<script setup>
const management = ref([
    {name: 'Shri Anuj Shekhsaria', subject: 'President'},
    {name: 'Shri S.L.Sharma', subject: 'Secretary'},
    {name: 'Dr. Sunita Sharma', subject: 'Principal'},
    {name: 'Shri Satish Chandra Sharma', subject: 'Treasurer'},
    {name: 'Dr. Seema Sahal', subject: 'Member (Staff Representative)'},
    {name: 'Dr. N.L.Arrawatia', subject: 'Member (Educationist)'},
    {name: 'Shri Bhagwana Ram Saini', subject: 'Member (Educationist)'},
    {name: 'Smt. Bala Bajaj', subject: 'Member (Students\' Gaurdian)'},
    {name: 'Dr. Madhubala Bajaj', subject: 'Member (Alumnus)'},
    {name: 'Shri Mahesh Malani', subject: 'Member'},
    {name: 'Shri Prabhu Dayal Nayak', subject: 'Member'},
    {name: 'Shri Vipul Mahamia', subject: 'Member'},
    {name: 'Shri Satyanarayan Chaudhary', subject: 'Member'},
])
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-2xl p-2 px-8 border-b-2">Management Committee</h2>
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in management" :key="i" 
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ i+1 }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s.name }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s.subject }}</td>
            </tr>
            
          </tbody>
        </table>
    </div>
    <Footer />
</template>