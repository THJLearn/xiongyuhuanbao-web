<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="qua-grid-content">
          <div class="qua-checking box-shadow">
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="qua-grid-content">
          <div class="qua-result box-shadow">

          </div>
        </div>
      </el-col>
    </el-row>

    <div style="margin-top:10px;" />

    <el-row :gutter="10">
      <el-col :span="24">
        <div class="grid-content">
          <div class="qua-result-content box-shadow">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
   
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