import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter({
      // Use the Node preset since @react-router/vercel doesn’t exist yet
      preset: "node",
    }),
    tsconfigPaths(),
  ],
});
