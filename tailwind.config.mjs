/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cream: '#F2F1E4',
				'cream-card': '#E8E7D3',
				'cream-line': '#DEDCC2',
				ink: '#26332E',
				pine: '#3B4B45',
				moss: '#4E635E',
				sage: '#6C7C74',
				fog: '#8A9890',
				mist: '#A6B49E',
			},
			fontFamily: {
				sans: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
