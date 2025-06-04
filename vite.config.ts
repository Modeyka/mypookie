import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')

  return {
    base: '/mypookie/', // 👈 تأكد من أنه اسم الريبو بالضبط

    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
git add .
git commit -m "Fix vite config for GitHub Pages"
git push
