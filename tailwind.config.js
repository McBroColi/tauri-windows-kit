/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
		"colors": {
			'lint': {
				'50': '#f7f7f8',
				'100': '#efeef0',
				'200': '#dbd8df',
				'300': '#bdb6c3',
				'400': '#988fa1',
				'500': '#7c7186',
				'600': '#655b6e',
				'700': '#534a5a',
				'800': '#46404c',
				'900': '#3e3842',
				'950': '#211e23',
			},			
		},
		fontFamily: {
			'sans': ['Inter'],
			'code': ['FiraCode'],
			'serif': ['Cinzel'],
			'display': ['Baloo']
		}
	},
  },
  plugins: [],
}

