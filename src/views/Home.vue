<template>
  <div class="home">
    {{info}}
  </div>
</template>

<script>

export default {
  name: 'home',

  components: {
  },

  props: {
    type: String
  },

  data () {
    return {
      info: "Hello World!",
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
.home {
  text-align: center;
  color: #aaa;
  font-size: 64px;
}
</style>
