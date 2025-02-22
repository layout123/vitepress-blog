<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
import { useData } from 'vitepress';
const { isDark } = useData();
import { nextTick, provide, watch } from 'vue';

// 获取 frontmatter 中的 layoutClass
const frontmatter = useData().frontmatter;
let layoutClass = frontmatter.value?.layoutClass; // 获取传递的 layoutClass
// 监听 frontmatter 的变化
watch(
  () => frontmatter.value?.layoutClass,
  (newClass) => {
    layoutClass = newClass; // 更新 layoutClass
  }
);
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];
  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    }
  );
});
</script>

<template>
  <div :class="layoutClass">
    <Layout></Layout>
  </div>
</template>
<style></style>
