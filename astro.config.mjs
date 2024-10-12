import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://90days.builetuananh.name.vn',
	image: {
		service: passthroughImageService()
	},
	// Sharp 0.33.5 has some issues: https://github.com/lovell/sharp/issues/4095
	// Consider upgrading to Node 22
	integrations: [starlight({
		title: 'BLTA',
		customCss: [
			// Path to your Tailwind base styles:
			'./src/tailwind.css',
		],
		logo: {
			src: './public/ET_Logo.png',
			replacesTitle: true
		},
		favicon: '/favicon.png',
		social: {
			facebook: 'https://www.facebook.com/buile.tuananh',
			instagram: 'https://www.instagram.com/yourlove.anthony2708/',
			linkedin: 'https://www.linkedin.com/in/anthony2708/',
			github: 'https://github.com/anthony2708',
			youtube: 'https://www.youtube.com/@yourlove.anthony2708',
			bitbucket: 'https://bitbucket.org/19120163/',
			email: 'mailto:builetuananh2708@gmail.com'
		},
		defaultLocale: 'root',
		locales: {
			root: {
				label: 'Việt ngữ',
				lang: 'vi'
			}
		},
		sidebar: [{
			label: '90 ngày DevOps',
			items: [
				{ label: 'Ngày 0 - Khởi đầu', link: '/guides/day0' },
				{
					label: 'Ngày 1 - Giới thiệu',
					link: '/guides/day1',
				},
				{
					label: 'Tại sao lại phải DevOps?',
					autogenerate: { directory: 'guides/devops' }
				},
				{
					label: 'Học lập trình với DevOps',
					autogenerate: { directory: 'guides/golang' }
				},
				{
					label: 'Linux và DevOps',
					autogenerate: { directory: 'guides/linux' }
				},
				{
					label: 'Mạng máy tính',
					autogenerate: { directory: 'guides/network' }
				},
				{
					label: 'Điện toán đám mây',
					autogenerate: { directory: 'guides/cloud' }
				},
				{
					label: 'Quản lý phiên bản',
					autogenerate: { directory: 'guides/git' }
				}
			]
		}, {
			label: 'Tài liệu tham khảo',
			items: [
				{
					label: 'Ngày 1 - Giới thiệu',
					link: '/reference/day1',
				},
				{
					label: 'Tại sao lại phải DevOps?',
					autogenerate: { directory: 'reference/devops' }
				},
				{
					label: 'Học lập trình với DevOps',
					autogenerate: { directory: 'reference/golang' }
				},
				{
					label: 'Linux và DevOps',
					autogenerate: { directory: 'reference/linux' }
				},
				{
					label: 'Mạng máy tính',
					autogenerate: { directory: 'reference/network' }
				},
				{
					label: 'Điện toán đám mây',
					autogenerate: { directory: 'reference/cloud' }
				},
				{
					label: 'Quản lý phiên bản',
					autogenerate: { directory: 'reference/git' }
				}
			]
			
		}]
	}),
	tailwind({
		applyBaseStyles: false,
	})]
});