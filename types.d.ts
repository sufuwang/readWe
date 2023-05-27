declare module "*.vue" {
	import vue from "vue";
	export default vue;
}

declare type Role = "customer" | "interviewer" | "admin";

declare interface Window {
	role: Role;
}
