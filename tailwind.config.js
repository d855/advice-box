/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        letterSpacing: {
            widest: '.25em'
        },
        extend: {
            colors: {
                'light-cyan': 'hsl(193, 38%, 86%)',
                'neon-green': 'hsl(150, 100%, 66%)',
                'grayish-blue': 'hsl(217, 19%, 38%)',
                'dark-grayish-blue': 'hsl(217, 19%, 24%)',
                'dark-blue': 'hsl(218, 23%, 16%)'
            },
            spacing: {
                desktop: '90rem'
            },
            boxShadow: {
                buttonShadow: '0 0 20px'
            }
        },
    },
    plugins: [],
}