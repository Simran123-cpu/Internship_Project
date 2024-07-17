import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Internship_Project/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
