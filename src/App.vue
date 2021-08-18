<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-512.png" alt="logo">
        </router-link>
        <router-link class="nav-item" to="/product/product1">Product</router-link>
        <router-link class="nav-item" to="/error404">Error404</router-link>
        <a class="nav-item" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
          Built with Vue.js
        </a>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.header {
  .inner a {}

  .logo {
    width: 60px;
    height: 60px;
  }

  .nav-item {
    margin: 20px;
  }
}
</style>
