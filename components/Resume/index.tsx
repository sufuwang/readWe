import { defineComponent } from "vue";
import styles from "./styles.module.scss";

export default defineComponent({
	render() {
		return (
			<table>
				<tr>
					<td align="left" style="width:90px;">
						姓名
					</td>
					<td align="left" style="width:230px;">
						王凯
					</td>
					<td align="left" style="width:100px;">
						年龄
					</td>
					<td align="left">28</td>
				</tr>
				<tr>
					<td align="left" class={styles.no_break}>
						联系电话
					</td>
					<td align="left" class={styles.no_break}>
						151-9186-6031
					</td>
					<td align="left">邮箱</td>
					<td align="left">
						<a href="https://mail.google.com/" target="_blank">
							sufuwang0818@gmail.com
						</a>
					</td>
				</tr>
				<tr>
					<td align="left">本科</td>
					<td align="left" class={styles.no_break}>
						西安某某大学
					</td>
					<td align="left" class={styles.no_break}>
						专业
					</td>
					<td align="left" class={styles.no_break}>
						自动化 / 2014-2018
					</td>
				</tr>
				<tr>
					<td>硕士</td>
					<td align="left">西安某某大学</td>
					<td align="left" class={styles.no_break}>
						专业
					</td>
					<td align="left" class={styles.no_break}>
						控制工程 / 2018-2021
					</td>
				</tr>
				<tr>
					<td>技术栈</td>
					<td align="left" colspan="3" class={styles.no_break}>
						TypeScript、Vue、React、VitePress、Uniapp、Vite、Docker、CI/CD
					</td>
				</tr>
			</table>
		);
	},
});
