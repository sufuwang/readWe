<template>
	<DefaultTheme.Layout />
</template>
<script setup>
import { onMounted, watch } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

onMounted(() => {
	const { isDark } = useData();
	watch(isDark, (val) => {
		if (val) {
			document.documentElement.setAttribute("theme-mode", "dark");
			return;
		}
		document.documentElement.removeAttribute("theme-mode");
	});
});
</script>
