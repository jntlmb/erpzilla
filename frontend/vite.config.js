import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                clientSelection: "client-selection.html",
                dashboard: "dashboard.html"
            }
        }
    }
});
