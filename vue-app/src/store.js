import { createStore } from "vuex";

const store = createStore({
  state: {
    lang: localStorage.getItem('lang'),
  },
  mutations: {
    CHANGE_LANG(state){
      if (state.lang === 'es') {
        state.lang = 'en';
        localStorage.setItem('lang', 'en');
      } else {
        state.lang = 'es';
        localStorage.setItem('lang', 'es');
      }
    }
  },
});

export default store;
