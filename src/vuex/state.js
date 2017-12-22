import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headernavbar:{
      wode: true,
      musicHall: false,
      discovery: false,
    },
    songSheet:{
      firstSheet: true,
      secondSheet: false
    },
    infoPage:{
      localSongs: false,
    }
  },
  mutations: {
    headernavbar_wode(state) {
      state.headernavbar.wode = true;
      state.headernavbar.musicHall = false;
      state.headernavbar.discovery = false;
    },
    headernavbar_musicHall(state) {
      state.headernavbar.wode = false;
      state.headernavbar.musicHall = true;
      state.headernavbar.discovery = false;
    },
    headernavbar_discovery(state) {
      state.headernavbar.wode = false;
      state.headernavbar.musicHall = false;
      state.headernavbar.discovery = true;
    },
    firstSheet(state){
      state.songSheet.firstSheet = true
      state.songSheet.secondSheet = false
    },
    secondSheet(state){
      state.songSheet.firstSheet = false
      state.songSheet.secondSheet = true
    },
    localSongs(state,status){
      state.infoPage.localSongs = status
    }
  }
})

export default store
