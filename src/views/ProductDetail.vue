<template>
  <div class="product-detail">
    {{productType}}
  </div>
</template>

<script>

export default {
  name: 'product-detail',

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

  computed: {
    productType() {
      return this.$route.params.productType;
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
