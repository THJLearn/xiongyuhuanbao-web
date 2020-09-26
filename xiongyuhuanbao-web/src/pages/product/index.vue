<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  components: {
   
  },
  data() {
    return {
      content:"<p>jaahha=</p>\n<p>si去那个i我难过</p>\n<p><img src=\"http://tianhaojiebucket1.oss-cn-beijing.aliyuncs.com/fan.jpg\" alt=\"\" width=\"275\" height=\"275\" /></p>"
      }
      },
  mounted() {},
  methods: {}
};
</script>

<style>
.qua-grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.qua-checking {
  height: 394px;
}
.qua-result {
  height: 394px;
}
.qua-result-content{
  height: 700px;
}
.box-shadow {
  border: solid 1px #0b1c3d;
  border-radius: 2px;
  box-shadow: 0px 0px 6px #7daaff inset;
}

.today {
  height: 597px;
}

.minganci {
  margin-top: 15px;
  height: 394px;
}

.mingan {
  height: 394px;
}
/* bg-purple */
</style>