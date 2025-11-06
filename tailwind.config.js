/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Astrateq Brand Colors
        'midnight-charcoal': '#1A1D23',
        'slate-grey': '#2D3338',
        'electric-cyan': '#00D9FF',
        'deep-cyan': '#0099CC',
        'success-green': '#00C896',
        'warning-amber': '#FFB020',
        'alert-red': '#FF4757',
        'info-blue': '#4A90E2',
      },
      fontFamily: {
        'poppins': ['system-ui', '-apple-system', 'sans-serif'],
        'inter': ['system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tight-custom': '-0.02em',
        'wide-custom': '0.05em',
      },
      lineHeight: {
        'relaxed-custom': '1.6',
      },
    },
  },
  plugins: [],
}
