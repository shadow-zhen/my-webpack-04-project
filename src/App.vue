<template>
  <div id="app">
    <h1 class="text-primary">{{ title }}</h1>
    <img :src="bigImg" alt="">
    <div>
      <span>{{ count }}</span>
      <button @click="increment">按钮</button>
    </div>
    <div class="logo"></div>
  </div>
</template>

<script>
import bigImg from '@/assets/images/big.png';
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: 'Hello Vue123',
      bigImg
    };
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
};
</script>

<style lang="scss">
  @import "~@/style/css/index.css";
  img {
    width: 600px;
  }
</style>
