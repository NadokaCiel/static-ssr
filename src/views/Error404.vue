<template>
  <div class="error-404">
      <header >
        <div class="head">
          <img class="head-logo" src="~public/logo-512.png" alt="logo">
          <ul class="head-class pc">
            <li class="pc">产品介绍</li>
            <li class="pc">在线工具</li>
            <li class="pc">服务详情</li>
            <li class="pc">建筑材料</li>
          </ul>
          <div class="head-dis mobile"></div>
          <div class="head-jump pc">
            <a href="http://www.colorwayoflove.com.cn/">
              <img class="head-logo" src="~public/logo-512.png" alt="logo">
            </a>
            <a href="http://www.colorwayoflove.com.cn/">
              <img class="head-logo" src="~public/logo-512.png" alt="logo">
            </a>
            <a href="http://www.colorwayoflove.com.cn/">
              <img class="head-logo" src="~public/logo-512.png" alt="logo">
            </a>
          </div>
        </div>
      </header>
      
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-12">123</div> -->
          <div class="col-lg-6 ">123</div>
          <div class="col-lg-6 ">123</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'error-404',

  components: {},

  props: {
    type: String
  },

  data () {
    return {
      info: "404 Not Found",
    }
  },

  computed: {
  },

  beforeMount () {
  },

  beforeDestroy () {
  },

  methods: {
  }
}
</script>

<style lang="scss">
  @import "../style/pageStyle/Error404.scss"
</style>
