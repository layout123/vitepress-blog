import DefaultTheme from 'vitepress/theme';
import { h, watch } from 'vue';
import MyLayout from './components/MyLayout.vue';
import MyNavLinks from './components/MyNavLinks.vue';
import { useData, EnhanceAppContext } from 'vitepress';
import './styles/index.scss';
export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    const { frontmatter } = useData();

    if (frontmatter.value?.layoutClass) {
      props.layout = frontmatter.value.layoutClass;
    }

    return h(MyLayout, props);
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.component('MyNavLinks', MyNavLinks);
  },
};
