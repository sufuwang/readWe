import type { EnhanceAppContext } from "vitepress";
import defaultTheme from "vitepress/theme";
import TDesign from "tdesign-vue-next";
import Layout from "./Layout.vue";

export default {
	...defaultTheme,
	Layout,
	enhanceApp({ app }: EnhanceAppContext) {
		app.use(TDesign);
	},
};
