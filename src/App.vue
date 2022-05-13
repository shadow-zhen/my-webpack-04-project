<template>
  <div id="app">
    <h1 class="text-primary">{{ title }}</h1>
    <p>{{ $t('message.hello') }}</p>
    <p>{{ $t('demo.serviceName') }}</p>
    <p>{{ $t('foo.fileTypeInvalidMsg') }}</p>
    <img :src="bigImg" alt="">
    <div>
      <span @click="increment">{{ count }}</span>
      <span>{{ user.name }}---{{ user.age }}</span>
      <button @click="handleSetuser">按钮</button>
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
