import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    port: 5173, // 원하는 포트 번호
    strictPort: true, // 포트 사용 중이면 에러 발생시키고 종료 (자동 변경 막기)
  },
})