import Vue from 'vue'

export default {
  SET_PRODUCT: (state, { id, product }) => {
    Vue.set(state.products, id, product || false) /* false means product not found */
  }
}
