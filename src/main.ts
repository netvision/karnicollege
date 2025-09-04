import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
import type { RouteRecordRaw } from 'vue-router';
import { createUnhead } from '@unhead/vue';

import '@/styles/index.css';
import { ViteSetupModule } from './types/ViteSetupModule';
import { setupLayouts } from 'virtual:generated-layouts';

// Import all page components
const pages = import.meta.glob('./pages/**/*.vue', { eager: true });

// Generate routes from pages
const routes: RouteRecordRaw[] = Object.keys(pages).reduce((acc: RouteRecordRaw[], path) => {
	const name = path.match(/\.\/pages\/(.*)\.vue$/)?.[1];
	if (!name) return acc;
	
	const pageModule = pages[path] as any;
	
	// Handle index route
	if (name === 'index') {
		acc.push({
			path: '/',
			name: 'home',
			component: pageModule.default,
		});
		return acc;
	}
	
	// Handle [...all] catch-all route
	if (name === '[...all]') {
		acc.push({
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: pageModule.default,
		});
		return acc;
	}
	
	// Handle other routes
	acc.push({
		path: `/${name}`,
		name: name,
		component: pageModule.default,
	});
	
	return acc;
}, []);

export const createApp = ViteSSG(
	App,
	{
		routes: setupLayouts(routes),
	},
	async (ctx: any) => {
		// Setup head management
		const head = createUnhead();
		ctx.app.use(head);
		
		Object.values(
			import.meta.glob<{ install: ViteSetupModule }>('./modules/*.ts', {
				eager: true,
			})
		).map(i => i.install?.(ctx));
	},
	{}
);
