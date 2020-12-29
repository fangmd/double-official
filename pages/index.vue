<template>
  <div class="container-xxl">
    <header>
      <span class="badge bg-light text-dark home-tag">工具箱</span>
      <span class="badge bg-secondary text-dark home-tag">占位</span>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.NODE_ENV)
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.title {
  color: green;
}

header {
  text-align: center;

  .home-tag {
    cursor: pointer;
  }
}
</style>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
