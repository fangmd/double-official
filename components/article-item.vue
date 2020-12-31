<template>
  <NuxtLink :to="detailUrl" class="article-item">
    <div>
      <p class="title">{{ article.title }}</p>
      <p>
        <span
          v-for="(item, index) in article.tagsArr"
          :key="index"
          class="badge bg-light text-dark home-tag"
          >{{ item }}</span
        >
      </p>
      <p class="time">
        创建时间：{{ article.createTime }} 更新时间：{{ article.updateTime }}
      </p>
      <!-- todo: tags -->
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    detailUrl() {
      return `/article-detail?id=${this.article.id}`
    },
  },
}
</script>

<style lang="less" scoped>
.article-item {
  color: #212529;
  display: block;
  padding: 10px 0;

  .title {
    font-weight: bold;
    font-size: 28px;
    padding: 10px 0;
  }
  .time {
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
