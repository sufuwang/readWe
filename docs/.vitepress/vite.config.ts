import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

const config: UserConfig = {
	resolve: {
		alias: [
			{ find: "@public", replacement: resolve(__dirname, "../../public") },
			{ find: "@comps", replacement: resolve(__dirname, "../../components") },
			{ find: "@docs", replacement: resolve(__dirname, "../../docs") },
			{ find: "@utils", replacement: resolve(__dirname, "../../utils") },
		],
	},
	plugins: [vueJsx()],
};

export default config;
