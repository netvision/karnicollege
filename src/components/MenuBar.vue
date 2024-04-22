<template>
	<nav class="bg-gray-700">
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
		  <!-- Menu items -->
		  <div class="hidden md:block">
			<div class="ml-10 flex items-baseline space-x-4">
			  <!-- Home -->
			  <MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
			</div>
		  </div>
		</div>
	  </div>
	</nav>
  </template>

  <script>
  import MenuItem from './MenuItem.vue';

  export default {
	props: {
	  menuItems: {
		type: Array,
		required: true
	  }
	},
	components: {
	  MenuItem
	}
  };
  </script>
