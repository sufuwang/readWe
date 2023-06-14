import type { UserConfig } from "vite";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";
import Seo from "./seo";

const config: UserConfig = {
	resolve: {
		alias: [
			{ find: "@public", replacement: resolve(__dirname, "../../public") },
			{ find: "@comps", replacement: resolve(__dirname, "../../components") },
			{ find: "@docs", replacement: resolve(__dirname, "../../docs") },
			{ find: "@utils", replacement: resolve(__dirname, "../../utils") },
		],
	},
	plugins: [
		vueJsx(),
		createHtmlPlugin({
			minify: true,
			inject: { tags: Seo },
		}),
	],
};

export default config;
