<template>
  <div class="page-root container-lg">
    <header>
      <a
        v-for="(item, index) in categories"
        :key="index"
        class="badge bg-light text-dark home-tag"
        :href="getTagUrl(item)"
        replace
        >{{ item.name }}</a
      >
      <!-- <nuxt-link
        v-for="(item, index) in categories"
        :key="index"
        class="badge bg-light text-dark home-tag"
        :to="getTagUrl(item)"
        replace
        >{{ item.name }}</nuxt-link
      > -->
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
  async asyncData({ route, $axios }) {
    let { category } = route.query
    if (category === '全部') {
      category = ''
    }
    const ret = await getCategories($axios)
    const articleRet = await getArticles($axios, { category })
    for (const item of articleRet.data.list) {
      item.tagsArr = item.tags && item.tags.split(',')
    }
    const arr = [{ name: '全部' }]
    return {
      categories: arr.concat(ret.data.list),
      articles: articleRet.data.list,
      category,
    }
  },
  data() {
    return {
      category: '',
      categories: [],
      articles: [],
    }
  },
  mounted() {},
  methods: {
    getTagUrl(item) {
      return `/?category=${item.name}`
    },
    refresh(tagName) {
      console.log(tagName)
    },
  },
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
      margin: 10px 10px;
    }
  }
  section {
    flex: 1;
  }
}
</style>
