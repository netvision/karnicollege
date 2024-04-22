<script setup>
const staff = ref([
 {
  "S. No.": 1,
  "Name": "Dr. Sunita Sharma",
  "Designation": "Principal",
  "Subject": "English",
  "DOJ": "08\/12\/2015",
  "Date of Approval From University": "NA",
  "Aadhar No.": 531284997739,
  "PAN No.": "EUWPS4758B"
 },
 {
  "S. No.": 2,
  "Name": "Dr. Seema Sahal",
  "Designation": "Asst. Prof.",
  "Subject": "Hindi",
  "DOJ": "08\/01\/2011",
  "Date of Approval From University": "NA",
  "Aadhar No.": 437203419767,
  "PAN No.": "CYVPS2721P"
 },
 {
  "S. No.": 3,
  "Name": "Ms. Madhubala",
  "Designation": "Asst. Prof.",
  "Subject": "Hindi",
  "DOJ": "07\/18\/2012",
  "Date of Approval From University": "NA",
  "Aadhar No.": 893065304640,
  "PAN No.": "BFOPM6394D"
 },
 {
  "S. No.": 4,
  "Name": "Dr. Anju Sharma",
  "Designation": "Asst. Prof.",
  "Subject": "History",
  "DOJ": "07\/22\/2011",
  "Date of Approval From University": "NA",
  "Aadhar No.": 329028978356,
  "PAN No.": "BIMPS7264K"
 },
 {
  "S. No.": 5,
  "Name": "Dr. Mukesh Maan",
  "Designation": "Asst. Prof.",
  "Subject": "History",
  "DOJ": "08\/04\/2016",
  "Date of Approval From University": "NA",
  "Aadhar No.": 784233122348,
  "PAN No.": "DPZPM7059Q"
 },
 {
  "S. No.": 6,
  "Name": "Ms. Mansi",
  "Designation": "Asst. Prof.",
  "Subject": "History",
  "DOJ": "07\/06\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 316177887340,
  "PAN No.": "IYDPM7195D"
 },
 {
  "S. No.": 7,
  "Name": "Ms. Manju Rani",
  "Designation": "Asst. Prof.",
  "Subject": "Political Science",
  "DOJ": "08\/03\/2011",
  "Date of Approval From University": "NA",
  "Aadhar No.": 444212223662,
  "PAN No.": "ASJPR7757G"
 },
 {
  "S. No.": 8,
  "Name": "Ms. Avantika Gaur",
  "Designation": "Asst. Prof.",
  "Subject": "Political Science",
  "DOJ": "09\/01\/2020",
  "Date of Approval From University": "NA",
  "Aadhar No.": 694523045088,
  "PAN No.": "BWQPG9987H"
 },
 {
  "S. No.": 9,
  "Name": "Ms. Sanju Sharma",
  "Designation": "Asst. Prof.",
  "Subject": "English",
  "DOJ": "07\/13\/2011",
  "Date of Approval From University": "NA",
  "Aadhar No.": 533775239257,
  "PAN No.": "GCIPS6136P"
 },
 {
  "S. No.": 10,
  "Name": "Ms. Poonam Bhardwaz",
  "Designation": "Asst. Prof.",
  "Subject": "English",
  "DOJ": "08\/28\/2018",
  "Date of Approval From University": "NA",
  "Aadhar No.": 439684156417,
  "PAN No.": "DZXPP4443M"
 },
 {
  "S. No.": 11,
  "Name": "Ms. Sanju Saini",
  "Designation": "Asst. Prof.",
  "Subject": "Economics",
  "DOJ": "07\/21\/2014",
  "Date of Approval From University": "NA",
  "Aadhar No.": 675749883077,
  "PAN No.": "GWEPS1305E"
 },
 {
  "S. No.": 12,
  "Name": "Ms. Meenakshi Sharma",
  "Designation": "Asst. Prof.",
  "Subject": "Economics",
  "DOJ": "07\/01\/2017",
  "Date of Approval From University": "NA",
  "Aadhar No.": 778781866012,
  "PAN No.": "DGLPS7340D"
 },
 {
  "S. No.": 13,
  "Name": "Ms. Deepika Kumari",
  "Designation": "Asst. Prof.",
  "Subject": "Geography",
  "DOJ": "07\/05\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 842237861074,
  "PAN No.": "ANIPD3020E"
 },
 {
  "S. No.": 14,
  "Name": "Ms. Pooja Katewa",
  "Designation": "Asst. Prof.",
  "Subject": "Geography",
  "DOJ": "10\/13\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 658087863810,
  "PAN No.": "OJMPK3205A"
 },
 {
  "S. No.": 15,
  "Name": "Ms. Laxmi Sharma",
  "Designation": "Asst. Prof.",
  "Subject": "Sociology",
  "DOJ": "07\/15\/2015",
  "Date of Approval From University": "NA",
  "Aadhar No.": 385275052198,
  "PAN No.": "IABPS8496F"
 },
 {
  "S. No.": 16,
  "Name": "Ms. Suman Jangir",
  "Designation": "Asst. Prof.",
  "Subject": "Home Science",
  "DOJ": "07\/04\/2022",
  "Date of Approval From University": "NA",
  "Aadhar No.": 674967480149,
  "PAN No.": "EILPS4794C"
 },
 {
  "S. No.": 17,
  "Name": "Ms. Jyoti Sharma",
  "Designation": "Asst. Prof.",
  "Subject": "EAFM",
  "DOJ": "07\/01\/2019",
  "Date of Approval From University": "NA",
  "Aadhar No.": 968007843878,
  "PAN No.": "EFWPS8335M"
 },
 {
  "S. No.": 18,
  "Name": "Ms. Pooja Nehra",
  "Designation": "Asst. Prof.",
  "Subject": "B.Adm.",
  "DOJ": "07\/05\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 894404878618,
  "PAN No.": "DRDPK5970C"
 },
 {
  "S. No.": 19,
  "Name": "Ms. Anju Sahal",
  "Designation": "Asst. Prof.",
  "Subject": "ABST",
  "DOJ": "08\/10\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 900461434130,
  "PAN No.": "IJCPS2839Q"
 },
 {
  "S. No.": 20,
  "Name": "Ms. Rama Sharma",
  "Designation": "Computer Instructor",
  "Subject": "Ele. Computer",
  "DOJ": "08\/02\/2004",
  "Date of Approval From University": "NA",
  "Aadhar No.": 351043817000,
  "PAN No.": "ARZPD9465E"
 },
 {
  "S. No.": 20,
  "Name": "Ms. Asha Sharma",
  "Designation": "PTI",
  "Subject": "PTI",
  "DOJ": "07\/05\/2023",
  "Date of Approval From University": "NA",
  "Aadhar No.": 971082970021,
  "PAN No.": "FNCPS9729E"
 }
])
const nonStaff = ref([
 {
  "S. No.": 1,
  "Name": "Ms. Sumanlata Sharma",
  "Designation": "Librarian",
  "DOJ": "07\/24\/2017",
  "Aadhar No.": 534565960895,
  "PAN No.": "IYNPS0621C"
 },
 {
  "S. No.": 2,
  "Name": "Mr. Shri Kant Mishra",
  "Designation": "Office Suptd.",
  "DOJ": "04\/25\/2011",
  "Aadhar No.": 725911056081,
  "PAN No.": "ABBPM7525Q"
 },
 {
  "S. No.": 3,
  "Name": "Mr. Amit Kumar",
  "Designation": "LDC",
  "DOJ": "08\/03\/2011",
  "Aadhar No.": 299443264591,
  "PAN No.": "BASPS6264H"
 },
 {
  "S. No.": 4,
  "Name": "Mr. Mukesh Kumar",
  "Designation": "LDC",
  "DOJ": "08\/03\/2011",
  "Aadhar No.": 496553569599,
  "PAN No.": "BQJPA3891D"
 },
 {
  "S. No.": 5,
  "Name": "Ms. Anju Sharma",
  "Designation": "Book Lifter",
  "DOJ": "07\/06\/2015",
  "Aadhar No.": 212634813599,
  "PAN No.": "HGMPS4295C"
 },
 {
  "S. No.": 6,
  "Name": "Ms. Indira Devi",
  "Designation": "Peon",
  "DOJ": "07\/11\/2018",
  "Aadhar No.": 694804201681,
  "PAN No.": "JIPPD1874R"
 },
 {
  "S. No.": 7,
  "Name": "Mr. Manohar Singh",
  "Designation": "Gardner",
  "DOJ": "07\/01\/2018",
  "Aadhar No.": 326759922988,
  "PAN No.": "GHJPS2661P"
 },
 {
  "S. No.": 8,
  "Name": "Mr. Suresh Kumar",
  "Designation": "Office Boy",
  "DOJ": "07\/01\/2018",
  "Aadhar No.": 240229404804,
  "PAN No.": "IAMPK4513A"
 },
 {
  "S. No.": 9,
  "Name": "Ms. Kamla Devi",
  "Designation": "Peon",
  "DOJ": "08\/03\/2011",
  "Aadhar No.": 470529138837,
  "PAN No.": "EETPD8367G"
 },
 {
  "S. No.": 10,
  "Name": "Ms. Jyoti Devi Soni",
  "Designation": "Lab Asst. (Home Science)",
  "DOJ": "08\/03\/2011",
  "Aadhar No.": 415056185082,
  "PAN No.": "JNLPS5561P"
 },
 {
  "S. No.": 11,
  "Name": "Mr. Sher Singh",
  "Designation": "Lab Asst. (Geography)",
  "DOJ": "07\/01\/2018",
  "Aadhar No.": 279248644209,
  "PAN No.": "HRSPB7495G"
 }
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