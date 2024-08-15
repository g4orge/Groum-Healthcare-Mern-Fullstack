/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your file types and paths
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3490dc',
        yellowColor: '#fbbf24',
        purpleColor: '#6d28d9',
        irishBlueColor: '#006d77',
        headingColor: '#111827',
        textColor: '#4b5563',
      },
      boxShadow: {
        customShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
