/* eslint-disable vue/no-v-html */
<template>
  <div class="page-root container-lg">
    <div class="row">
      <div class="col-md-2 col-0"></div>
      <div class="col-md-8 col-12">
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
      <markdown-nav :md-content="article.content" class="col-md-2 col-0" />
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/apis/blog'
import MarkdownContent from '@/components/markdown-content'
import MarkdownNav from '@/components/markdown-nav'

/**
 * 文章详情页
 */
export default {
  name: 'ArticleDetail',
  components: { MarkdownContent, MarkdownNav },
  async asyncData({ route, $axios }) {
    const { id } = route.query
    const ret = await getArticle($axios, { id })
    if (ret.data.tags) {
      ret.data.tagsArr = ret.data.tags.split(',')
    }
    return { article: ret.data }
  },
  data() {
    return {
      article: {},
    }
  },
  head: {
    script: [
      { src: '/comment.js', body: true },
      // { src: '/test.js', body: true },
    ],
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
