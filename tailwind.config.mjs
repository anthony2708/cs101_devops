import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#c9c8c9', 600: '#6d6a6e', 900: '#333233', 950: '#242325' };
const gray = { 100: '#f6f6f7', 200: '#ededef', 300: '#c2c2c3', 400: '#8b8b8e', 500: '#58585a', 700: '#38383a', 800: '#262629', 900: '#181819' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};