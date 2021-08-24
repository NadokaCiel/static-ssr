<template>
  <div class="product-detail">
    {{product.title}}
  </div>
</template>

<script>
export default {
  name: 'product-detail',

  // 定义单独的数据
  meta: {
    title: "测试标题",
    description: "一些产品描述",
  },

  components: {},

  props: {
    type: String
  },

  data () {
    return {}
  },

  created() {
    console.log("this", this);
  },

  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('FETCH_PRODUCT', { id: route.params.productId });
  },

  computed: {
    // 从 store 的 state 对象中的获取 product
    product () {
      this.$options.meta.title = "产品名称";
      this.$options.meta.keywords = "产品关键字";
      return this.$store.state.products[this.$route.params.productId];
    },
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
.product-detail {
  text-align: center;
  color: #aaa;
  font-size: 64px;
}
</style>
