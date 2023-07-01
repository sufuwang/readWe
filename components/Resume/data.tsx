export interface Data {
	name: string;
	age: number;
	github?: string;
	telephone?: string;
	email?: string;
	educationExperience: {
		undergraduate: { school: string; major: string };
		postgraduate?: { school: string; major: string };
	};
	skills: Array<string>;
	description?: string;
}

export const SufuWang: Data = {
	name: "王凯",
	age: 28,
	telephone: "151-9186-6031",
	email: "sufuwang0818@gmail.com",
	educationExperience: {
		undergraduate: {
			school: "西安某某大学",
			major: "自动化 / 2014-2018",
		},
		postgraduate: {
			school: "西安某某大学",
			major: "控制工程 / 2018-2021",
		},
	},
	skills: [
		"TypeScript",
		"Vue",
		"React",
		"VitePress",
		"Uniapp",
		"Vite",
		"Docker",
		"CI/CD",
		"Nest",
	],
};

export const UI_zhang: Data = {
	name: "孙浉潞",
	age: 32,
	educationExperience: {
		undergraduate: {
			school: "西南交通大学",
			major: "电气工程及其自动化 / 2011-2015",
		},
	},
	skills: [
		"Sketch",
		"Adobe XD",
		"C4D",
		"Adobe After Effects",
		"Adobe Photoshop",
		"Adobe Illustrator",
		"Axure",
		"Figma",
	],
	description:
		"具有 10 年平面和用户交互方向的设计经验，可以独立设计 Web、微信小程序、App、大型医疗 B 端系统、后台系统、终端机、大屏等场景",
};

export const Technology_cai: Data = {
	name: "@noxussj",
	age: 30,
	github: "https://github.com/noxussj",
	educationExperience: {
		undergraduate: {
			school: "-",
			major: "计算机科学与技术 / 2013-2017",
		},
	},
	skills: [
		"Vue",
		"React",
		"Angular",
		"Polp",
		"Gulp",
		"Rollup",
		"Webpack",
		"Typescript",
		"Nodejs",
		"Koa",
		"Mysql",
		"Electron",
		"Webgl",
	],
	description:
		"6 年前端经验，擅长大数据可视化平台开发，高度重视开发效率和代码质量",
};
