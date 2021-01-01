<template>
  <div class="page-root container-lg">
    <header>
      <a
        v-for="(item, index) in categories"
        :key="index"
        class="badge text-dark home-tag"
        :class="{
          'bg-secondary': category === item.name,
          'bg-light': category !== item.name,
        }"
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
    <m-pagination
      :total-cnt="totalCnt"
      :page="page"
      :size="size"
    ></m-pagination>
    <m-footer></m-footer>
  </div>
</template>

<script>
import { getCategories, getArticles } from '@/apis/blog'
import MFooter from '@/components/mfooter'
import ArticleItem from '@/components/article-item'
import MPagination from '@/components/m-pagination'

/**
 * 首页
 */
export default {
  components: { MFooter, ArticleItem, MPagination },
  async asyncData({ route, $axios }) {
    const { category } = route.query
    const { page = 1, size = 10 } = route.query
    let queryCategory = category
    if (queryCategory === '全部') {
      queryCategory = ''
    }
    const ret = await getCategories($axios)
    const articleRet = await getArticles($axios, { queryCategory, page, size })
    for (const item of articleRet.data.list) {
      item.tagsArr = item.tags && item.tags.split(',')
    }
    const arr = [{ name: '全部' }]
    return {
      categories: arr.concat(ret.data.list),
      articles: articleRet.data.list,
      category,
      totalCnt: articleRet.data.totalCnt,
      page: parseInt(page),
    }
  },
  data() {
    return {
      category: '全部',
      categories: [],
      articles: [],
      totalCnt: 0,
      page: 0,
      size: 10,
    }
  },
  mounted() {},
  methods: {
    getTagUrl(item) {
      const q = { ...this.$route.query }
      q.category = item.name
      q.page = 1
      let queryStr = ''
      for (const i in q) {
        if (queryStr) {
          queryStr = `${queryStr}&${i}=${q[i]}`
        } else {
          queryStr = `${i}=${q[i]}`
        }
      }
      return `/?${queryStr}`
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
