import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.SidebarItem[] = [
	{
		text: "Reference",
		items: [
			{
				text: "关于我们",
				items: [
					{
						text: "我的简历",
						link: "/mine/resume",
					},
					{
						text: "业务范围",
						link: "/mine/capability",
					},
					{
						text: "联系我们",
						link: "/mine/contact",
					},
				],
			},
		],
	},
];

export default sidebar;
