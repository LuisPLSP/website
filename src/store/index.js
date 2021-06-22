import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lang: {
      en: true,
      pt: false,
    },
  },
  getters: {
    getLangEn(state) {
      return state.lang.en;
    },
    getLangPt(state) {
      return state.lang.pt;
    },
  },
  mutations: {
    setLangEn(state, en) {
      state.lang.en = en;
    },
    setLangPt(state, pt) {
      state.lang.pt = pt;
    },
  },
  actions: {
    changeLangEn: function({ commit }, params) {
      commit("setLangEn", params);
    },
    changeLangPt: function({ commit }, params) {
      commit("setLangPt", params);
    },
  },
  modules: {},
  strict: false,
});
