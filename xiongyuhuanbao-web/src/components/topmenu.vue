<template>
  <div :class="[isActive? 'menu active' : 'menu normal']" @click="goPage">{{title}}</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: ["title", "link"],
  computed:{
    ...mapState("navTabStore", ["activeTabName"]),
    isActive(){
      return this.link === this.activeTabName;
    }
  },
  methods: {
    ...mapMutations("navTabStore", ["changeTab"]),
    goPage() {
      this.$router.push(
        this.link,
        () => {
          this.changeTab(this.link);
        },
        e => {
          console.log(e);
        }
      );
    }
  }
};
</script>

<style>
.menu {
  width: 110px;
  /* height: 37px; */
  border-radius: 19px;
  font-size: 1rem;
  line-height: 37px;
  text-align: center;
  cursor: pointer;
}

/* .menu:hover {
  border: 1px solid rgba(50, 84, 167, 1);
  background: rgba(12, 27, 66, 0.7);
  color: #ffffff;
  opacity: 0.4;
} */

.normal {
  color: #74b9ff;
  border: none;
  background: transparent;
}

.active {
  border: 1px solid rgba(50, 84, 167, 1);
  background: rgba(12, 27, 66, 0.7);
  color: #ffffff;
  box-sizing: border-box;
}
</style>