import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  // root: "new",
  //  server: {
  //   host: 'localhost',
  //   port: 3000,
  //   open: true,
  // },
});