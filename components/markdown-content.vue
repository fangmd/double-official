/* eslint-disable vue/no-v-html */
<template>
  <div class="markdown-body" v-html="getContent"></div>
</template>

<script>
import { md2html } from '@/utils/md-utils'

export default {
  name: 'MarkdownContent',
  props: {
    mdContent: {
      type: String,
      default: '',
    },
  },
  computed: {
    getContent() {
      return md2html(this.mdContent)
    },
  },
}
</script>

<style lang="less" scoped></style>
