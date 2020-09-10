<template>
  <section>
    <el-container>
      <el-header>
        <TabNav />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </section>
</template>
<script>
import TabNav from "@/components/tabnav.vue";

export default {
  components: {
    TabNav
  }
};
</script>

<style>
.el-footer {
  padding: 0px !important;
}
.el-header {
  height: 140px !important;
  padding: 0px !important;
}
</style>