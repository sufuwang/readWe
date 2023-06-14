import type { HtmlTagDescriptor } from "vite";

const seo: HtmlTagDescriptor[] = [
	{
		injectTo: "head-prepend",
		tag: "meta",
		attrs: {
			name: "Keywords",
			content:
				"前端、后端、自动化、TypeScript、Vue、React、VitePress、Uniapp、Vite、Docker、CI/CD、Nest、NI、MyRIO、Labview、项目外包、外包、代写",
		},
	},
	{
		injectTo: "head-prepend",
		tag: "meta",
		attrs: {
			name: "Description",
			content:
				"满足客户包括且不限于前端、后端、移动端、软件工程、服务器、域名、证书、CDN等计算机相关的一切需求，同时还可以做一些自动化相关的事情。总之，我们力求为您提供为您无限可能，解决您在技术方面的后顾之忧。",
		},
	},
];

export default seo;
