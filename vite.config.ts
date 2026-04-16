import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'neo-the-agency-germany'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `/${repoName}/` : '/',
  plugins: [react()],
}))
