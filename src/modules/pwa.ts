import { ViteSetupModule } from '@/types/ViteSetupModule';

export const install: ViteSetupModule = ({ isClient, router }) => {
	if (!isClient) return;

	// Temporarily disabled PWA
	// router.isReady().then(async () => {
	// 	const { registerSW } = await import('virtual:pwa-register');
	// 	registerSW({ immediate: true });
	// });
};
