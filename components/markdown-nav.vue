/* eslint-disable vue/no-v-html */
<template>
  <div class="markdown-nav">
    <ul>
      <li
        v-for="(item, index) in getContent"
        :key="index"
        :class="item.type"
        class="nav-item"
      >
        <a :href="`#${item.id}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { md2html } from '@/utils/md-utils'

export default {
  name: 'MarkdownNav',
  props: {
    mdContent: {
      type: String,
      default: '',
    },
  },
  computed: {
    getContent() {
      const htmlContent = md2html(this.mdContent)
      const lines = htmlContent.split('\n')
      const nodeRoot = []
      for (const l of lines) {
        if (l.startsWith('<h1')) {
          const node = this.getNode(l)
          node.type = 'h1'
          nodeRoot.push(node)
        }
        if (l.startsWith('<h2')) {
          const node = this.getNode(l)
          node.type = 'h2'
          nodeRoot.push(node)
        }
        if (l.startsWith('<h3')) {
          const node = this.getNode(l)
          node.type = 'h3'
          nodeRoot.push(node)
        }
        if (l.startsWith('<h4')) {
          const node = this.getNode(l)
          node.type = 'h4'
          nodeRoot.push(node)
        }
        if (l.startsWith('<h5')) {
          const node = this.getNode(l)
          node.type = 'h5'
          nodeRoot.push(node)
        }
      }
      return nodeRoot
    },
  },
  methods: {
    getNode(l) {
      const node = {}
      node.title = this.getTitle(l)
      node.id = this.getTagContent(l)
      return node
    },
    getTitle(l) {
      if (!l) return ''
      return l.substring(l.indexOf('>') + 1, l.lastIndexOf('<'))
    },
    getTagContent(l) {
      if (!l) return ''
      console.log(l)
      console.log(l.substring(l.indexOf('=') + 1, l.indexOf('>')))
      return l.substring(l.indexOf('=') + 1, l.indexOf('>')).replace('/"/g', '')
    },
  },
}
</script>

<style lang="less" scoped>
.markdown-nav {
  position: fixed;
  top: 5vh;
  right: 0;
  height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    height: 100%;
  }

  .nav-item {
    a {
      color: #232629;
    }
  }

  .h1 {
    font-size: 1.3em;
  }
  .h2 {
    font-size: 0.97em;
  }
  .h3 {
    font-size: 0.9em;
  }
  .h4 {
    font-size: 0.8em;
  }
  .h5 {
    font-size: 0.6em;
  }
}
@media (max-width: 767.98px) {
  .markdown-nav {
    display: none;
  }
}
</style>
