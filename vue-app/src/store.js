import { createStore } from "vuex";

const store = createStore({
  state: {
    lang: 'es',
  },
  mutations: {
    CHANGE_LANG(state){
      if (state.lang === 'es') {
        state.lang = 'en';
      } else {
        state.lang = 'es';
      }
    }
  },
});

export default store;
