/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
		fontFamily: {
			'sans': ['Inter'],
			'code': ['FiraCode'],
			'serif': ['Cinzel'],
			'display': ['Baloo']
		}
	},
  },
  plugins: [require('daisyui')],
}

