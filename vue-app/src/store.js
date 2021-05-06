import { createStore } from "vuex";

const store = createStore({
  mutations: {
    CHANGE_LANG(){
      if (localStorage.getItem('lang') === 'es') {
        localStorage.setItem('lang', 'en');
      } else {
        localStorage.setItem('lang', 'es');
      }
    }
  },
});

export default store;
