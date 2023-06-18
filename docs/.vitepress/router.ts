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
			{
				text: "详细业务",
				items: [
					{
						text: "简历相关",
						link: "/detail/resume",
					},
				],
			},
		],
	},
];

export default sidebar;
