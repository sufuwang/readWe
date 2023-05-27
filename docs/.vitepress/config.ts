import { defineConfig } from "vitepress";
import Router from "./router";
import ViteConfig from "./vite.config";

const logo =
	"https://www.16personalities.com/static/images/personality-types/famous/explorers_ISFP_jungkook_bts.svg?v=6";

export default defineConfig({
	vite: ViteConfig,
	title: "Sufu.Wang",
	head: [["link", { rel: "icon", href: logo }]],
	description: "王凯",
	lastUpdated: true,
	themeConfig: {
		logo,
		search: {
			provider: "local",
		},
		nav: [
			{ text: "首页", link: "/" },
			{ text: "加入我们", link: "/mine/contact" },
		],
		sidebar: Router,
		socialLinks: [
			{ icon: "github", link: "https://github.com/sufuwang" },
			{ icon: "twitter", link: "https://github.com/sufuwang" },
		],
		footer: {
			message: "@SufuWang",
			copyright: "Copyright © 2023-Present",
		},
		lastUpdatedText: "更新时间",
	},
});
