import autoprefixer from 'autoprefixer'

export default {
  plugins: {
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: { config: autoprefixer }
  }
}
