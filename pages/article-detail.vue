<template>
  <div class="page-root container-lg">
    <h1>{{ article.title }}</h1>
    <p>
      <span
        v-for="(item, index) in article.tagsArr"
        :key="index"
        class="badge bg-light text-dark home-tag"
        >{{ item }}</span
      >
    </p>
    <div>
      {{ article.content }}
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/apis/blog'

export default {
  name: 'ArticleDetail',
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

<style lang="less" scoped></style>
