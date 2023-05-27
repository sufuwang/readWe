/// <reference path="../types.d.ts" />

declare module "*.module.scss" {
	const styles: Record<string, string>;
	export default styles;
}
