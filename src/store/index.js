import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lang: {
      en: true,
      pt: false,
    },
    card: {
      price: "regular",
      location: "one",
    },
  },
  getters: {
    getLangEn(state) {
      return state.lang.en;
    },
    getLangPt(state) {
      return state.lang.pt;
    },
    getCardDetails(state) {
      return state.card;
    },
  },
  mutations: {
    setLangEn(state, en) {
      state.lang.en = en;
    },
    setLangPt(state, pt) {
      state.lang.pt = pt;
    },
    setCardDetails(state, cardChosen) {
      state.card.price = cardChosen.price;
      state.card.location = cardChosen.location;
    },
  },
  actions: {
    changeLangEn: function({ commit }, params) {
      commit("setLangEn", params);
    },
    changeLangPt: function({ commit }, params) {
      commit("setLangPt", params);
    },
    changeCardDetails: function({ commit }, params) {
      commit("setCardDetails", params);
    },
  },
  modules: {},
  strict: false,
});
