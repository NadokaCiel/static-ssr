<template>
  <div class="error-404">
    {{info}}
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
.error-404 {
  text-align: center;
  color: #aaa;
  font-size: 64px;
}
</style>
