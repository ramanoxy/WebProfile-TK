/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Orange untuk Energi & Kreativitas
        primary: {
          DEFAULT: '#f97316', 
          hover: '#ea580c',   
          light: '#ffedd5',   
        },
        // Green untuk Pertumbuhan & Keamanan
        secondary: {
          DEFAULT: '#22c55e', 
          hover: '#16a34a',   
          light: '#dcfce7',   
        },
        // Neutral untuk teks yang lembut (menghindari hitam pekat)
        neutral: {
          dark: '#334155',    
          base: '#64748b',    
          light: '#f8fafc',   
        }
      },
      fontFamily: {
        // Kita atur font defaultnya menjadi Nunito agar terlihat ramah anak
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}