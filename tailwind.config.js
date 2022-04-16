const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		fontFamily: {
			"sans": ["Roboto", ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
  plugins: [],
}
