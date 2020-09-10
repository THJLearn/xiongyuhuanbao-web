<template>
  <div class="menu-box">
        <img src="@/assets/logo.png" @click="goHome" class="zx_logo" />
        <div class="grid-content">
           <div @click="callme" class="menu-phone">服务热线：18735173681</div>
            <div class="menus">
              <TopMenuItem title="网站首页" link="/" />
              <TopMenuItem title="公司介绍" link="/introduce" />
              <TopMenuItem title="供应产品" link="/product" />
              <TopMenuItem title="新闻中心" link="/news" />
              <TopMenuItem title="联系方式" link="/contact" />
            </div>
        </div>
  </div>
</template>

<script>
import TopMenuItem from "@/components/topmenu.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    ...mapState("navTabStore", ["activeTabName"]),
  },
  components: {
    TopMenuItem,
  },
  methods: {
    ...mapMutations("navTabStore", ["changeTab"]),
    callme() {
      
    },
  },
};
</script>

<style>
.menu-box {
  widows: 100%;
  background: #2d3c63;
  padding: 0 20px;
  box-sizing: border-box;
  height: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.zx_logo {
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 8px;
}

.menus {
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.grid-content {
  border-radius: 4px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.menu-phone {
  margin-left: 25px;
  padding: 10px 20px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color:white;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid rgba(50, 84, 167, 1);
  background: rgba(12, 27, 66, 0.7);
}
</style>