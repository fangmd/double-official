/* eslint-disable vue/no-v-html */
<template>
  <div class="page-root container-lg">
    <div class="article-header">
      <p class="title">{{ article.title }}</p>
      <p class="time">
        创建时间：{{ article.createTime | formateServerTime }} 更新时间：{{
          article.updateTime | formateServerTime
        }}
      </p>
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
    <div id="SOHUCS" :sid="article.id"></div>
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
  head: {
    script: [{ src: '/comment.js', body: true }],
  },
}
</script>

<style lang="less" scoped>
.page-root {
  padding-top: 20px;
  padding-bottom: 20px;

  .article-header {
    // padding: 20px 0;
    .title {
      font-size: 26px;
      font-weight: bold;
    }
    .time {
      font-size: 14px;
      padding: 10px 0;
      color: #212529;
    }
  }

  .tags {
    padding: 10px 0 30px;
  }
}
</style>
