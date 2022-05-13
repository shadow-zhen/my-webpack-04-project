<template>
  <div id="app">
    <router-link to="/login">Go to Login</router-link>
    <router-link to="/guest">Go to guest</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import bigImg from '@/assets/images/big.png';
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: 'Hello Vue',
      bigImg
    };
  },
  computed: {
    ...mapState(['count']),
    ...mapState('moduleDemo', ['user'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapMutations('moduleDemo', ['setUser']),
    handleSetuser() {
      this.setUser({
        name: 'ls',
        age:20
      })
    }
  }
};
</script>

<style lang="scss">
  @import "~@/style/css/index.css";
  img {
    width: 600px;
  }
</style>
