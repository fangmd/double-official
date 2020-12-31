/* eslint-disable vue/no-v-html */
<template>
  <div class="page-root container-lg">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="tags">
      <span
        v-for="(item, index) in article.tagsArr"
        :key="index"
        class="badge bg-light text-dark home-tag"
        >{{ item }}</span
      >
    </div>
    <markdown-content :md-content="article.content"></markdown-content>
  </div>
</template>

<script>
import { getArticle } from '@/apis/blog'
import MarkdownContent from '@/components/markdown-content'

/**
 * 文章详情页
 */
export default {
  name: 'ArticleDetail',
  components: { MarkdownContent },
  async asyncData({ route, $axios }) {
    const { id } = route.query
    const ret = await getArticle($axios, { id })
    ret.data.tagsArr = ret.data.tags.split(',')
    return { article: ret.data }
  },
  data() {
    return {
      article: {},
    }
  },
}
</script>

<style lang="less" scoped>
.page-root {
  padding-top: 20px;
  padding-bottom: 20px;

  .title {
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
  }
  .tags {
    padding: 10px 0;
  }
}
</style>
