import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Layouts from 'vite-plugin-vue-layouts';
import generateSitemap from 'vite-ssg-sitemap';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueRouter({
			dts: true,
			routesFolder: 'src/pages',
		}),
		vue(),
		Components({
			dts: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
				}),
			],
		}),
		Icons({
			compiler: 'vue3',
		}),
		AutoImport({
			dts: true,
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue\??/, // .vue
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				VueRouterAutoImports,
				// 'vue-i18n',
				'@vueuse/core',
				// custom
			],

			// custom resolvers
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [],
		}),
		Layouts(),
	],
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
		__VUE_PROD_DEVTOOLS__: 'false',
		__VUE_OPTIONS_API__: 'true',
		__VUE_PROD_MINIFY__: 'true'
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		fs: {
			strict: true,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@unhead/vue'],
	},
	// @ts-ignore
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
		format: 'esm',
		onFinished() {
			generateSitemap();
		},
		mock: true
	},
	// https://github.com/vitest-dev/vitest
	test: {
		include: ['src/__test__/**/*.test.ts', 'src/__test__/**/*.spec.ts'],
		environment: 'jsdom',
		deps: {
			inline: ['@vue', '@vueuse', 'vue-demi'],
		},
	},
});
