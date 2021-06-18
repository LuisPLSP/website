import Vue from "vue";
import Vuex from "vuex";
//import firebase from "firebase";
//let storage = firebase.storage();

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lang: {
      en: true,
      pt: false,
    },
    assets: {
      homePhotos: [],
      coursesPhotos: [],
      forksPhotos: [],
      shockPhotos: [],
      techsessionPhotos: [],
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
    setHomePhotos(state, homePhotos) {
      state.assets.homePhotos = homePhotos;
    },
  },
  actions: {
    changeLangEn: function({ commit }, params) {
      commit("setLangEn", params);
    },
    changeLangPt: function({ commit }, params) {
      commit("setLangPt", params);
    },
    // fetchHomePhotos: function({ commit }) {
    //   let storageRef = storage.ref();
    //   const response = storageRef.child("frontforkscourse");
    //   commit("setBusinessDetails", response);
    //   console.log(this.state.assets.homePhotos);
    // },
  },
  modules: {},
  strict: false,
});
