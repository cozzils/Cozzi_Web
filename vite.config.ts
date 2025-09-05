import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Cozzi_Web/', // Solo una volta, senza duplicazioni
});
