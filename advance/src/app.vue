<!-- App.vue -->
<template>
      <div>
            <h2>SSR服务器渲染页面</h2>
            <router-link to="/mv">mv</router-link>
            <router-link to="/song">song</router-link>
            <router-link to="/lyric">lyric</router-link>
            <router-view></router-view>
      </div>
</template>


<script>
export default {
      mounted() {

      }
}
</script>

<style stylus="less" scoped>
    
</style>