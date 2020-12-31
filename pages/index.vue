<template>
  <div class="page-root container-lg">
    <header>
      <span
        v-for="(item, index) in categories"
        :key="index"
        class="badge bg-light text-dark home-tag"
        >{{ item.name }}</span
      >
      <!-- <span class="badge bg-secondary text-dark home-tag">占位</span> -->
    </header>
    <section>
      <article-item
        v-for="(item, index) in articles"
        :key="index"
        :article="item"
      ></article-item>
    </section>
    <m-footer></m-footer>
  </div>
</template>

<script>
import { getCategories, getArticles } from '@/apis/blog'
import MFooter from '@/components/mfooter'
import ArticleItem from '@/components/article-item'

/**
 * 首页
 */
export default {
  components: { MFooter, ArticleItem },
  async asyncData({ $axios }) {
    const ret = await getCategories($axios)
    const articleRet = await getArticles($axios)
    for (const item of articleRet.data.list) {
      item.tagsArr = item.tags && item.tags.split(',')
    }
    return { categories: ret.data.list, articles: articleRet.data.list }
  },
  data() {
    return {
      categories: [],
      articles: [],
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.title {
  color: green;
}

.page-root {
  display: flex;
  flex-direction: column;
  header {
    padding: 20px 0;
    text-align: center;

    .home-tag {
      cursor: pointer;
    }
  }
  section {
    flex: 1;
  }
}
</style>
