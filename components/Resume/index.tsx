import { PropType, defineComponent } from "vue";
import { type Data } from "./data";
import styles from "./styles.module.scss";

export * from "./data";

export default defineComponent({
	props: {
		data: {
			type: Object as PropType<Data>,
			required: true,
		},
	},
	render() {
		return (
			<table>
				<tr>
					<td align="left" style="width:90px;">
						姓名
					</td>
					<td align="left" style="width:230px;">
						{this.data.github ? (
							<a href={this.data.github} target="_blank">
								{this.data.name}
							</a>
						) : (
							this.data.name
						)}
					</td>
					<td align="left" style="width:100px;">
						年龄
					</td>
					<td align="left">{this.data.age}</td>
				</tr>
				{(this.data.telephone || this.data.email) && (
					<tr>
						<td align="left" class={styles.no_break}>
							联系电话
						</td>
						<td align="left" class={styles.no_break}>
							{this.data.telephone ?? "-"}
						</td>
						<td align="left">邮箱</td>
						<td align="left">
							<a href="https://mail.google.com/" target="_blank">
								{this.data.email ?? "-"}
							</a>
						</td>
					</tr>
				)}
				<tr>
					<td align="left">本科</td>
					<td align="left" class={styles.no_break}>
						{this.data.educationExperience.undergraduate.school}
					</td>
					<td align="left" class={styles.no_break}>
						专业
					</td>
					<td align="left" class={styles.no_break}>
						{this.data.educationExperience.undergraduate.major}
					</td>
				</tr>
				{this.data.educationExperience.postgraduate && (
					<tr>
						<td>硕士</td>
						<td align="left">
							{this.data.educationExperience.postgraduate?.school}
						</td>
						<td align="left" class={styles.no_break}>
							专业
						</td>
						<td align="left" class={styles.no_break}>
							{this.data.educationExperience.postgraduate?.major}
						</td>
					</tr>
				)}
				<tr>
					<td>技术栈</td>
					<td align="left" colspan="3" class={styles.no_break}>
						{this.data.skills.join(",  ")}
					</td>
				</tr>
				{this.data.description && (
					<tr>
						<td>简介</td>
						<td align="left" colspan="3" class={styles.no_break}>
							{this.data.description}
						</td>
					</tr>
				)}
			</table>
		);
	},
});
