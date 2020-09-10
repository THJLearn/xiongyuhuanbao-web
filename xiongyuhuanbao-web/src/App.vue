<template>
  <div>
    <!-- 留坑，非常重要 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  background: #111B46;
  margin: 0;
  padding: 0;
}
</style>