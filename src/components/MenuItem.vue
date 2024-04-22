<template>
	<div v-if="item.subMenu && item.subMenu.length > 0" class="relative" @click="toggleDropdown">
	  <button :class="[buttonClass, { 'bg-gray-700': dropdownOpen }]" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
		<span>{{ item.label }}</span>
		<svg v-if="item.showArrow" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
		  <path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
		</svg>
	  </button>
	  <div v-show="dropdownOpen" @click.away="closeDropdown" class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
		<a v-for="(submenuItem, index) in item.subMenu" :key="index" :href="submenuItem.url" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ submenuItem.label }}</a>
	  </div>
	</div>
	<a v-else :href="item.url" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{{ item.label }}</a>
  </template>

  <script>
  export default {
	props: {
	  item: {
		type: Object,
		required: true
	  }
	},
	data() {
	  return {
		dropdownOpen: false
	  };
	},
	methods: {
	  toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
	  },
	  closeDropdown() {
		this.dropdownOpen = false;
	  }
	},
	computed: {
	  buttonClass() {
		return this.dropdownOpen ? 'bg-gray-800' : '';
	  }
	}
  };
  </script>
