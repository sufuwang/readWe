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
						text: "团队简介",
						link: "/mine/team",
					},
					{
						text: "案例介绍",
						link: "/mine/case",
					},
					{
						text: "联系我们",
						link: "/mine/contact",
					},
				],
			},
			{
				text: "业务范围",
				items: [
					{
						text: "概况",
						link: "/detail/capability",
					},
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
