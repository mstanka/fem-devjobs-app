export default {
  setMode(context, payload) {
    if (payload) {
      localStorage.theme = 'light';
      context.commit('setMode', 'light');
    } else {
      localStorage.theme = 'dark';
      context.commit('setMode', 'dark');
    }
  },
};
