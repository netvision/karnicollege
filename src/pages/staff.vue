<script setup>
const staff = ref([
 {
  "sno": 1,
  "name": "DR. SANDEEP JANGIR",
  "subject": "GEOGRAPHY",
  "qualification": "PH.D",
  "doj": "01\/07\/2007",
  "aadhar": "AUZPJ1858Q",
  "pan": "5707 8363 7811"
 },
 {
  "sno": 2,
  "name": "DR. SANGEETA KUMARI",
  "subject": "HINDI",
  "qualification": "PH.D, SET",
  "doj": "01\/10\/2019",
  "aadhar": "CPMPK5843N",
  "pan": "3191 4819 6460"
 },
 {
  "sno": 3,
  "name": "DR. RITU RAJ",
  "subject": "HISTORY",
  "qualification": "PH.D,NET, SET",
  "doj": "01\/07\/2019",
  "aadhar": "FPIPR7021J",
  "pan": "9916 3563 1491"
 },
 {
  "name": "DR. SNEHA JANGIR",
  "subject": "ZOOLOGY",
  "qualification": "PH.D",
  "doj": "01\/07\/2022",
  "aadhar": "BFJPJ8971E",
  "pan": "8558 8919 7584"
 },
 {
  "name": "DR. POONAM NIRWAN",
  "subject": "MATH",
  "qualification": "PH.D",
  "doj": "01\/07\/2019",
  "aadhar": "AKQPN3736L",
  "pan": "9638 0592 8939"
 },
 {
  "name": "DR. POONAM SHARMA",
  "subject": "PHYSICS",
  "qualification": "PH.D",
  "aadhar": "CXDPS9785E"
 },
 {
  "sno": 4,
  "name": "ANJU SAINI",
  "subject": "HINDI",
  "qualification": "NET",
  "doj": "01\/01\/2019",
  "aadhar": "JBJPS3151R",
  "pan": "4649 7175 9350"
 },
 {
  "sno": 5,
  "name": "PRIYANKA",
  "subject": "CHEMISTRY",
  "qualification": "NET",
  "doj": "26\/02\/2021",
  "aadhar": "EACPP7998Q",
  "pan": "5031 5939 1572"
 },
 {
  "sno": 8,
  "name": "BEENA KUMAWAT",
  "subject": "BOTANY",
  "qualification": "M.SC",
  "doj": "18\/01\/2022",
  "aadhar": "BABPK6649Q",
  "pan": "7201 8974 3073"
 },
 {
  "sno": 9,
  "name": "KARISHMA TANWAR",
  "subject": "H - SCIENCE",
  "qualification": "M.SC",
  "doj": "01\/07\/2017",
  "aadhar": "BVMPT6109B",
  "pan": "3527 7872 1659"
 },
 {
  "sno": 10,
  "name": "MUNESH KUMARI",
  "subject": "POL. SCIENCE",
  "qualification": "M.A",
  "doj": "01\/07\/2023",
  "aadhar": "CBTPD1419A",
  "pan": "9243 5857 7960"
 },
 {
  "sno": 11,
  "name": "RAMSINGH",
  "subject": "ENGLISH",
  "qualification": "M.A",
  "doj": "26\/02\/2021",
  "aadhar": "BKNPR5554E",
  "pan": "3468 3939 4759"
 },
 {
  "sno": 12,
  "name": "CHANDGI RAM",
  "subject": "GEOGRAPHY",
  "qualification": "NET",
  "doj": "01\/09\/2021",
  "aadhar": "BEJPR2786E",
  "pan": "4541 7813 7075"
 },
 {
  "sno": 13,
  "name": "PREETI KUMARI",
  "subject": "GEOGRAPHY",
  "qualification": "M.A",
  "doj": "26\/02\/2021",
  "aadhar": "FDHPP1696G",
  "pan": "3746 7482 8576"
 },
 {
  "sno": 15,
  "name": "BHARAT SINGH",
  "subject": "SOCIOLOGY",
  "qualification": "M.A",
  "doj": "01\/09\/2021",
  "aadhar": "KLSPS7766A",
  "pan": "6190 5219 1416"
 },
 {
  "sno": 16,
  "name": "MAHESH KUMAR SAINI",
  "subject": "ELE. COMPUTER",
  "qualification": "PGDCA",
  "doj": "01\/07\/2016",
  "aadhar": "CYKPS5999A",
  "pan": "5684 0121 7292"
 },
 {
  "sno": 17,
  "name": "NAWAL SINGH SHEKHAWAT",
  "subject": "LDC",
  "doj": "01\/07\/2022",
  "aadhar": "KAVPS5348A",
  "pan": "3511 6134 4351"
 },
 {
  "sno": 18,
  "name": "RENU JANGIR",
  "subject": "LAB ASST",
  "qualification": "M.SC",
  "doj": "01\/07\/2023"
 },
 {
  "sno": 19,
  "name": "KULDEEP SHARMA",
  "subject": "UDC",
  "doj": "01\/01\/2015",
  "aadhar": "EWWPS8924K",
  "pan": "5471 3366 2280"
 }
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
              <td class="whitespace-nowrap px-6 py-4">{{ i+1 }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["name"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["subject"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["qualification"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["doj"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["aadhar"] }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s["pan"] }}</td>
            </tr>
            
          </tbody>
        </table>
    </div>
    <Footer />
</template>