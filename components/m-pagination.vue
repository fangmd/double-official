<template>
  <nav v-if="show" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: page <= 1 }">
        <a
          class="page-link"
          :href="getURL(page - 1)"
          tabindex="-1"
          aria-disabled="true"
          >上一页</a
        >
      </li>
      <li
        v-for="(item, index) in pageArr"
        :key="index"
        class="page-item"
        :class="{ active: page === item }"
      >
        <a class="page-link" :href="getURL(item)">{{ item }}</a>
      </li>
      <li class="page-item" :class="{ disabled: page === pageTotal }">
        <a class="page-link" :href="getURL(page + 1)">下一页</a>
      </li>
    </ul>
  </nav>
</template>

<script>
/**
 * 分页组件
 * 规则：
 * 1. 总数小于 size 隐藏整个控件, 总数大于 size 显示整个控件
 * 2. 页数<=5, 显示所有页(上一页+5个页面索引+下一页)，页数>5(上一页+5个页面索引+下一页)(当前页面处在2号位置)
 */
export default {
  name: 'MPagination',
  props: {
    // 总数
    totalCnt: {
      type: Number,
      default: 0,
    },
    // 当前位置
    page: {
      type: Number,
      default: 0,
    },
    // 每页数量
    size: {
      type: Number,
      default: 20,
    },
  },
  fetch() {
    this.updateUI()
  },
  data() {
    return {
      pageTotal: 0,
      show: true,
      pageArr: [],
    }
  },
  methods: {
    getURL(itemPage) {
      const q = { ...this.$route.query }
      q.page = itemPage
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
    updateUI() {
      if (this.totalCnt < this.size) {
        this.show = false
        return
      }
      this.pageTotal = Math.ceil(this.totalCnt / this.size)
      if (this.page > this.pageTotal) {
        // 异常情况，超出最大页码
        this.show = false
        // const q = { ...this.$route.query }
        // q.page = this.pageTotal
        // this.$router.replace({ path: '/12', query: q })
        return
      }
      if (this.pageTotal <= 5) {
        const arr = []
        for (let i = 0; i < this.pageTotal; i++) {
          arr.push(i + 1)
        }
        this.pageArr = arr
      } else {
        const arr = []
        for (let i = 0; i < 5; i++) {
          if (this.page <= 1) {
            // 当前在1的时候
            arr.push(this.page + i)
          } else if (this.page + 3 >= this.pageTotal) {
            // 没有更多页了
            arr.push(this.pageTotal - (4 - i))
          } else {
            // 中间情况
            arr.push(this.page + i - 1)
          }
        }
        this.pageArr = arr
      }
    },
  },
}
</script>
