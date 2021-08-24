import {
  fetchProduct,
} from '../api';

export default {
  FETCH_PRODUCT: ({ commit, state }, { id }) => {
    return state.products[id]
      ? Promise.resolve(state.products[id])
      : fetchProduct(id).then(product => commit('SET_PRODUCT', { id, product }))
  }
}
