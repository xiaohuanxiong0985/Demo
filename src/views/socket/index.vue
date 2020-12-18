<template>
  <button @click="test">测试</button>
</template>

<script>
  // import wsConnection from '../../utils/websocket'
  export default {
    mounted() {
    },
    methods: {
      connect() {
        const url = 'ws://192.168.0.3:7979/myUrl';
        const socket = new SockJS(" URL ");   //URL需要连接的地址
        stompClient = Stomp.over(socket);

      }
    }
  }
</script>

<style scoped>

</style>
