export default {
  namespaced: true,
  state: {
    user: {
      name: 'zs',
      age: 18
    }
  },
  mutations: {
    setUser(state, payload) {
      Object.assign(state.user, payload)
    }
  }
}
