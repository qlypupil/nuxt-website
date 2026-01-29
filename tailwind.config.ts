/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default <Config>{
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [forms, typography],
}
