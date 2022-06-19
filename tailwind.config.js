module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "autumn-texture": "url('@/assets/textures/autumn.png')",
        "soccer-field-texture": "url('@/assets/textures/soccer_field.jpg')"
      },
      fontSize: {
        'xxs': '.65rem'
      }
    },
  },
  plugins: [],
}
